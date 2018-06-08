import { isDate } from 'util';

const Koa = require('koa')

const app = new Koa()

const isDev = process.env.NODE_ENV === 'development' // 服务器端渲染区分开发和线上环境

app.use(async (ctx, next) => {
  try {
    console.log(`request with ${ctx.path}`)
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 500
    if (isDev) {
      ctx.body = err.message
    } else {
      ctx.body = 'please try again laters'
    }
  }
})

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
