
import Home from '../layout/Home.vue'
import Readme from '../layout/MainPage.vue'

export default [
  {
    path: '/',
    redirect: '/index/readme', // 重定向到默认首页
    hidden: true
  },
  {
    path: '/index',
    component: Home,
    redirect: 'noredirect',
    name: 'index',
    noDropdown: true,
    children: [
      {
        path: 'readme',
        component: Readme,
        name: '系统说明',
        meta: {
          title: '系统说明'
        }
      }
    ]
  },
  {
    path: '/todo',
    component: Home,
    redirect: 'noredirect',
    name: 'todo',
    meta: {
      title: 'this is todo',
      description: 'todo app'
    },
    noDropdown: true,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "todo-view" */ '@/views/todo/todo.vue'),
        name: 'todo',
        meta: {
          title: 'todo'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login-view" */ '@/views/login/login.vue')
  },
  {
    path: '/test',
    component: () => import(/* webpackChunkName: "testProxy-view" */ '@/views/test/test.vue')
  }
]
