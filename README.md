# vue-starter-kit
一个用于快速搭建前端vue工程的脚手架

## 一、项目使用
### 1 使用git仓库快速创建模板
执行下面命令，以当前脚手架为模板创建vue单页应用项目

    vue init <git repo> <project name>

### 2 快速使用

    npm run build    | 执行构建，产出编译后的文件
    npm run dev      | 使用 webpack-dev-server 运行开发环境
    npm run lint     | 对 src/ 目录下的 js 和 vue文件，执行 eslint 校验
    npm run lint-fix | 用于快速修复上一步的 eslint 错误
    npm run server   | 开启服务器端程序，将客户端代码挂载为服务器的静态资源文件
### 3 目前支持功能如下

- [x] 使用自定义 webpack 配置文件 ，支持区分 开发模式 和 构建模式:sparkles:
- [x] 本地提供静态服务 webpack-dev-server 支持自动打开浏览器、模块热重载等
- [x] 支持 eslint 校验, 对js vue 文件，会在文件保存后，其他module rule生效前检查，如果出错中止后续行为，提高效率
- [x] 支持 editorconfig 的
- [x] 集成了 vuex 和 vue-router 并通过一个TODO应用实现最佳实践
- [x] 支持 precommit git hook
- [x] 预制了自定义的弹窗组件、Loading组件、tab切换组件
- [x] 预设了对 css / jsx / vue / stylus 文件和主流图片类型的文件以及图标字体文件编译支持
- [x] 预制了 babel 配置 支持 es6 新特性
- [x] 支持设置项目 favicon.ico
### 4 技术站

使用的主要的技术如下
- webpack 3.10
- express 4.16
- vue 2.5
- vuex 3.0
- vue-router 3.0
- axios
- babel

### 5 目录结构

    ├── README.md
    ├── client                            vue 单页应用代码
    │   ├── build                         webpack 构建相关代码
    │   │   ├── template.ejs                webpack 构建模板文件
    │   │   ├── webpack.config.base.js      webpack 构建基本配置
    │   │   ├── webpack.config.dev.js       webpack 构建开发配置
    │   │   └── webpack.config.prod.js      webpack 构建生产配置
    │   ├── config.js
    │   ├── debug                         存放本地开发时,用于模拟接口返回数据的文件
    │   ├── favicon.ico                   应用logo（显示在浏览器打开标签和收藏夹）
    │   └── src                           客户端 vue 单页应用源代码
    │       ├── app.vue                   根组件
    │       ├── assets                    资源文件件
    │       │   ├── fonts                   图标字体文件夹
    │       │   ├── images                  图片文件夹
    │       │   └── styles                  样式表文件夹
    │       ├── components                公共组件文件夹
    │       │   ├── loading                 loading 组件
    │       │   ├── notification            通知提示窗组件
    │       │   └── tabs                    自定义切换组件
    │       ├── layout                    布局相关文件夹
    │       ├── main.js                   客户端入口文件
    │       ├── router                    vue-router 文件夹
    │       │   ├── index.js                vue-router 主文件
    │       │   └── routes.js               vue-router 路由配置文件
    │       ├── store                     vuex 文件夹
    │       │   ├── actions
    │       │   │   └── actions.js
    │       │   ├── getters
    │       │   │   └── getters.js
    │       │   ├── mutations
    │       │   │   └── mutations.js
    │       │   ├── state
    │       │   │   └── state.js
    │       │   └── store.js
    │       ├── util                      工具函数文件夹
    │       │   ├── bus.js                  event-bus
    │       │   ├── requestModel.js         封装网络请求函数
    │       │   └── util.js                 基础工具函数合集
    │       └── views                     页面逻辑代码（预制了三个用于演示功能的组件）
    │           ├── login                   登录组件
    │           ├── test                    用于演示 webpack-dev-server proxy 功能的测试组件
    │           │   └── test.vue
    │           └── todo                    todo 组件
    ├── dist                              构建目录
    │   ├── app.f59aa2ed.js                 构建核心代码
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── login-view.33484d2b.js          懒加载的组件代码
    │   ├── manifest.1322d5be.js            app.xxx.js中webpack相关函数代码
    │   ├── resources
    │   ├── styles.1a64ffe2.css             样式分离文件（不包括组件内的样式）
    │   ├── testProxy-view.9b4a3633.js      懒加载的组件代码
    │   ├── todo-view.7e2216e3.js           懒加载的组件代码
    │   └── vendor.15f297d6.js              公共库代码
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js                  postcss 配置文件
    └── server                             服务器代码
        └── index.js

> 使用这个命令在mac或ubuntu系统生成项目目录 `tree -I '*git|*node_modules'`

## 二、备注
### 2、1 关于如何正确持续引入图标
    - 1、在iconfont 网站创建工程，将中意的图标添加进入工程
    - 2、下载该工程至本地，解压压缩包，打开文件夹
    - 3、复制文件夹中四个字体文件并覆盖项目中`src/assets/fonts/`中的对应文件
    - 4.1、如果是首次引入字体文件，将文件夹内 css文件改名为`.styl`后缀复制到`src/assets/styles`文件夹内；
    - 4.2、如果不是首次引入而是向项目追加字体文件，则将下载的然后复制修改 css文件中第6行base64，替换掉对应文件的对应内容
    - 5、开始使用`<div class="icon-left"></div>`
