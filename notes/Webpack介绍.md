---
title: Webpack介绍
tags: [Notebooks/webpack]
created: '2021-01-17T11:38:07.967Z'
modified: '2021-01-17T12:14:19.719Z'
---

# Webpack介绍
## 为什么要用webpack
* npm的第三方组件在浏览器端的js代码中不能直接引入，流行框架Vue、React等的语法，在浏览器也不能直接解析，需要借助webpack构建工具。
* 针对不同分辨率的网页开发需要针对不同应用场景做不同的打包
* css前缀补全/预处理器
* 压缩混淆，压缩图片
## webpack配置文件
webpack.config.js
```js
module.exports = {
  entry:'./src/index.js',--------------------------------打包的入口文件
  output:'./dist/main.js',-------------------------------打包的输出
  mode:'production',-------------------------------------环境
  module:{
    rules:[----------------------------------------------Loader配置
    {test:^.txt$,use:'raw-loader'}
    ]
  },
  plugins:[----------------------------------------------插件配置
    new HtmlwebpackPlugin({
      template:'./src/index.html'
    }
    )
  ]}
```
