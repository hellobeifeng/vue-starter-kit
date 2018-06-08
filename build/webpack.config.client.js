const path = require('path')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const isDev = process.env.NODE_ENV === 'development' // 启动时设置的环境变量都在process.env中
// 根据环境设置webpack
let config
const devServer = {
  host: 'localhost',
  port: 8080,
  historyApiFallback: {
    index: '/public/index.html'
  },
  overlay: {
    errors: true // 错误展示在网页上
  },
  hot: true,
  open: true
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    title: 'vue 脚手架',
    template: path.join(__dirname, 'template.html')
  }),
  new VueClientPlugin()
]

if (isDev) {
  // 开发环境，开发环境配置合并主配置
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
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
        }
      ]
    },
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(), // 只能在开发环境使用 和 hot配套使用
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    entry: {
      app: path.join(__dirname, '../client/index.js'),
      vendor: ['vue']
    },
    module: {
      rules: [
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
      ]
    },
    plugins: defaultPlugins.concat([
      new ExtractPlugin('styles.[contentHash:8].css'),
      // 实现类库文件的独立打包，注意名字要和上面的vender相同
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      // 将 生成在app.js中webpack的相关的代码
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      })
    ])
  })
}

module.exports = config
