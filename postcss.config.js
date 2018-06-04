// 后处理 css ，对 css文件进行优化
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer() // 自动添加浏览器前缀
  ]
}