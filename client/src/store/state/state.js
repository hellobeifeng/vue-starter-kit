import Cookies from 'js-cookie'

export default {
  count: 0,
  todos: [],
  user: null,
  loading: false,
  sidebar: {
    opened: !+Cookies.get('sidebarStatus')
  }
}
