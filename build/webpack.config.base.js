const path = require('path')

const config = {
  target: 'web',
  entry: path.join(__dirname, '../src/main.js'), // default
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(vue|js)/,
        loader: 'eslint-loader',
        exclude: /node_module/,
        enforce: 'pre' // 对于这几种类型的文件在真正的loader处理之前，先执行此处的预处理
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 8Kb;少于此处Limit的图片不会被单独输出成文件，而是会被转码成base64输出在文件中
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
