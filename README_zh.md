# ci-template

> 基于vue2.0的中台B端模板

## 语言
- [English](./README.md)

## 开始之前
**你需要熟悉以下概念**
- [npm](https://www.npmjs.com/)
- [webpack](http://webpackdoc.com/)
-  [vue](https://cn.vuejs.org/)
-  [vue-router](https://router.vuejs.org/zh-cn/)
-  [vuex](https://vuex.vuejs.org/zh-cn/)
-  [element-ui](http://element.eleme.io/#/zh-CN)
-  [scss](http://sass-lang.com/)

## 使用

本模板基于[vue-cli](https://github.com/vuejs/vue-cli). **请使用npm3+ 以安装所有依赖.**

``` bash
$ npm install -g vue-cli
$ vue init w11p3333/ci-template my-project
$ cd my-project
$ npm install
$ npm run dev
```

## 文件结构

![files](http://7xtc17.com1.z0.glb.clouddn.com/Snip20170324_10.png)

## 配置
- 开发环境配置
![dev config](http://7xtc17.com1.z0.glb.clouddn.com/Snip20170327_4.png)

- 打包配置
![pack config](http://7xtc17.com1.z0.glb.clouddn.com/Snip20170327_5.png)

## 主要依赖库
- vue 2.1.10
- vue-router 2.2.0
- vuex 2.2.1
- vue-i18n 1.2.5
- babel state 3
- scss/vue/...loaders
- [ci-components(base on IDG)](https://www.npmjs.com/package/ci-components)
  - element-ui 1.2.5
- [ci-network(base on IDG)](https://www.npmjs.com/package/ci-network)
  - axios 0.15.3
  - qs 6.4.0

## npm script

- `npm run dev`: 本地开发环境.

  - 单组件的Webpack + `vue-loader`.
  - 运行时热重载. hot reload
  - 编译错误提示
  - ESLint
  - Source maps

- `npm run build`: 生产环境的打包.

  - 基于[UglifyJS](https://github.com/mishoo/UglifyJS2)的js压缩.
  - 基于[html-minifier](https://github.com/kangax/html-minifier)的html压缩.
  - 基于 [cssnano](https://github.com/ben-eb/cssnano)的css处理.
  - 支持所有静态文件的hash处理 和自动生成引用静态文件的index.html
  - 使用 `npm run build --report`分析.

- `npm run unit`: 基于phantomJS + [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack) 运行环境的单元测试.
  - 支持es6的测试文件.
  - 支持所有css loader.
  - 容易的mock注入.



