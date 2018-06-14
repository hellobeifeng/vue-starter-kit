const Router = require('koa-router')

const apiRouter = new Router({ prefix: '/api' }) // 只处理api前缀的路由

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}

apiRouter
  .get('/todo', async (ctx) => {
    const todos = await ctx.db.getAllTodos()
    ctx.body = successResponse(todos)
  })

module.exports = apiRouter
