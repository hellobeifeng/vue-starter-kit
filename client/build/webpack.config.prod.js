const path = require('path')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

// 根据环境设置webpack
const config = merge(baseConfig, {
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js' // 指定分离出来的代码文件的名称
  },
  entry: {
    app: path.join(__dirname, '../src/main.js'),
    vendor: ['vue']
  },
  module: {
    rules: [
      {
        test: /\.styl/,
        // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HTMLPlugin({
      title: '一个脚手架',
      template: path.join(__dirname, 'template.ejs'),
      inject: true,
      favicon: path.resolve('favicon.ico'),
      // minify: { // 压缩 HTML 的配置
      //   minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
      //   minifyJS: true // 压缩 HTML 中出现的 JS 代码
      // }
    }),
    new ExtractPlugin('styles.[contentHash:8].css'),
    // 实现类库文件的独立打包，注意名字要和上面的vender相同
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // 将 生成在app.js中webpack的相关的代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
})

module.exports = config
