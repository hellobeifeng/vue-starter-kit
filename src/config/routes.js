import Todo from '@/views/todo/todoBox.vue'
import test from '@/views/test'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo
  },
  {
    path: '/test',
    component: test
  }
]
