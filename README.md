# ci-template

> a vue2.0 template based on IDG

## lanuage
[Chinese](./README_zh.md)

## before
**you need know**
- [npm](https://www.npmjs.com/)
- [webpack](http://webpackdoc.com/)
-  [vue](https://cn.vuejs.org/)
-  [vue-router](https://router.vuejs.org/zh-cn/)
-  [vuex](https://vuex.vuejs.org/zh-cn/)
-  [element-ui](http://element.eleme.io/#/zh-CN)
-  [scss](http://sass-lang.com/)

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init w11p3333/ci-template my-project
$ cd my-project
$ npm install
$ npm run dev
```

## Files

![files](http://7xtc17.com1.z0.glb.clouddn.com/Snip20170324_10.png)

## Config
- dev config: config your `domain`  `service name` `appkey` `channel`
![dev config](http://7xtc17.com1.z0.glb.clouddn.com/Snip20170327_4.png)

- pack config: config your project pack location, default to ../webroot
![pack config](http://7xtc17.com1.z0.glb.clouddn.com/Snip20170327_5.png)

## What's Library Included
- vue: 2.1.10
- vue-router: 2.2.0
- vuex: 2.2.1
- vue-i18n: 1.2.5
- babel state 3
- scss/vue/...loaders
- [ci-components(base on IDG)](https://www.npmjs.com/package/ci-components)
  - element-ui: 1.2.5
- [ci-network(base on IDG)](https://www.npmjs.com/package/ci-network)
  - axios: 0.15.3
  - qs: 6.4.0

## How To Devolpment

- 1. add your components in `src/components/` and views in `src/views/`
- 2. add apis in `src/apis/index.js`
- 3. add store in 
     `src/store/...`
- 4. add router about view in `src/router/index.js`


## What's Script Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015 in test files.
  - Supports all webpack loaders.
  - Easy mock injection.


### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```


