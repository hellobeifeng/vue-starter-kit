const Koa = require('koa')
const send = require('koa-send')
const path = require('path')
const app = new Koa()

const staticRouter = require('./routers/static')
const apiRouter = require('./routers/api')
const createDb = require('./db/db')
const config = require('../app.config')

const db = createDb(config.db.appId, config.db.appKey)

const isDev = process.env.NODE_ENV === 'development' // 服务器端渲染区分开发和线上环境

app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 500
    if (isDev) {
      ctx.body = err.message
    } else {
      ctx.bosy = 'please try again later'
    }
  }
})

app.use(async (ctx, next) => {
  ctx.db = db
  await next()
})

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../') })
  } else {
    await next()
  }
})

app.use(staticRouter.routes()).use(staticRouter.allowedMethods())
app.use(apiRouter.routes()).use(apiRouter.allowedMethods())

let pageRouter
if (isDev) {
  pageRouter = require('./routers/dev-ssr')
  // pageRouter = require('./routers/dev-ssr-no-bundle')
} else {
  pageRouter = require('./routers/ssr')
  // pageRouter = require('./routers/ssr-no-bundle')
}

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 9099

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
