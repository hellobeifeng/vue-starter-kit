
export default [
  {
    path: '/',
    redirect: '/todo'
  },
  {
    path: '/todo',
    component: () => import('@/views/todo/todo.vue'),
    name: 'todo',
    meta: {
      title: 'this is todo',
      description: 'todo app'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  }
]