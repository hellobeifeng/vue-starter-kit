# vue-starter-kit
一个用于快速搭建前端vue工程的脚手架

## 目录结构

  `tree -I '*git|*node_modules'`


├── build
│   ├── template.html 模板html 用于插值webpack构建生成的js模块
│   ├── webpack.config.base.js
│   └── webpack.config.dev.js
│   └── webpack.config.dev.js
├── dist
│   ├── app.861bf1b1.js
│   ├── manifest.ef31be5c.js
│   ├── resources
│   │   └── src
│   │       └── assets
│   │           └── images
│   │               └── 3100kb.96f76140.jpg
│   ├── styles.546ddec1.css
│   └── vendor.08050b62.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── app.vue
│   ├── assets
│   │   ├── fonts
│   │   │   ├── music-icon.eot
│   │   │   ├── music-icon.svg
│   │   │   ├── music-icon.ttf
│   │   │   └── music-icon.woff
│   │   ├── images
│   │   └── styles
│   │       ├── base.styl
│   │       ├── global.styl
│   │       ├── icon.styl
│   │       ├── index.styl
│   │       ├── mixin.styl
│   │       ├── reset.styl
│   │       └── variable.styl
│   ├── components
│   │   ├── loading
│   │   │   └── loading.vue
│   │   ├── notification
│   │   │   ├── func-notification.js
│   │   │   ├── function.js
│   │   │   ├── index.js
│   │   │   └── notification.vue
│   │   └── tabs
│   │       ├── index.js
│   │       ├── tab-container.vue
│   │       ├── tab.vue
│   │       └── tabs.vue
│   ├── layout
│   │   └── header.vue
│   ├── main.js
│   ├── router
│   │   ├── index.js
│   │   └── routes.js
│   ├── server.js
│   ├── store
│   │   ├── actions
│   │   │   └── actions.js
│   │   ├── getters
│   │   │   └── getters.js
│   │   ├── mutations
│   │   │   └── mutations.js
│   │   ├── state
│   │   │   └── state.js
│   │   └── store.js
│   ├── util
│   │   ├── bus.js
│   │   └── util.js
│   └── views
│       ├── login
│       │   └── login.vue
│       └── todo
│           ├── helper.vue
│           ├── item.vue
│           └── todo.vue
└── webpack.config.js

## 技术站
- webpack 3.10
- express 4.16
- vue 2.5
- vuex 3.0
- vue-router 3.0
- axios

## 目前支持功能如下

- [x] 使用自定义 webpack 配置文件 ，支持区分 开发模式 和 构建模式:sparkles:
- [x] 开发环境使用 webpack-dev-server 支持自动打开浏览器、模块热重载等
- [x] 支持 eslint 校验, 对js vue 文件，会在文件保存后，其他module rule生效前检查，如果出错中止后续行为，提高效率
- [x] 支持 editorconfig 的
- [x] 支持 precommit git hook
- [x] 预制了自定义的弹窗组件、Loading组件、tab切换组件
- [x] 预设了对 css / jsx / vue / stylus 文件和主流图片类型的文件编译支持


### TODO

- proxy流程
- icon流程
- logo确认
- bus-auth
- 自定义组件
- util.js - ?? 合并一下
- webpack-chunkname 懒加载这个没起作用
- 如何正确持续引入图标

- babel-polyfill babel-runtime fastclick
