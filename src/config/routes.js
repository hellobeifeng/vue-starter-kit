
export default [
  {
    path: '/',
    redirect: '/todo'
  },
  {
    path: '/todo',
    component: () => import('@/views/todo/todoBox.vue'),
    // component: Todo,
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
    path: '/todo/:id',
    component: () => import('@/views/todo/todoBox.vue'),
    name: 'todo'
  },
  {
    path: '/test',
    component: () => import('@/views/test'),
    children: [
      {
        path: 'subTest/:id',
        props: true, // 将 /todo/:id 提取id进入组件的 prop,不需要从 this.$route 提取, 用于从 $route解耦
        // props: (route) => ({ id: route.query.b }), // 甚至可以这样
        component: () => import('@/views/subTest')
      }
    ]
  }
]
