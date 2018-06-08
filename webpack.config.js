const path = require('path')
const isDev = process.env.NODE_ENV === 'development' // 启动时设置的环境变量都在process.env中
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin')

const config = {
  target: 'web',
  entry: path.join(__dirname, 'client/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
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
              name: '[name]-large.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ]
}

// 根据环境设置webpack
if (isDev) {
  config.module.rules.push({
    test: /\.styl/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        }
      },
      'stylus-loader'
    ]
  })
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8080,
    host: 'localhost',
    overlay: {
      errors: true // 错误展示在网页上
    },
    hot: true,
    open: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(), // 只能在开发环境使用 和 hot配套使用
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'client/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push(
    {
      test: /\.styl/,
      use: ExtractPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ]
      })
    }
  )
  config.plugins.push(
    new ExtractPlugin('styles.[contentHash:8].css'),
    // 实现类库文件的独立打包，注意名字要和上面的vender相同
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // 将 生成在app.js中webpack的相关的代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  )
}

module.exports = config
