const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader' 
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl$/, // 其他的css预处理器都按照如此方法安装使用
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true, // 使用前面（stylus-loader）插件生成的sourceMap 不重复生成
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240, // 单位为b, 少于此处Limit的图片不会被单独输出成文件，而是会被转码成base64输出在文件中
              name: '[name]-feng.[ext]'
            }
          }
        ]
      }
    ]
  }
}