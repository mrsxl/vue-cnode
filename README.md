# vue-cnode

> 使用vue全家桶实现的cnode社区第三方webapp  [在线访问](http://mrsxl.coding.me/vue-cnode/#/)

## 技术栈
本项目基于vue + vue-router + vuex  + axios + ES6 + less开发，使用webpack构建工具编译打包项目

## 实现的功能
1. 登录
2. 获取主题
3. 主题详情
4. 新建主题
5. 编辑主题
6. 收藏主题
7. 取消主题
8. 用户所收藏的主题
9. 新建评论
10. 为评论点赞
11. 用户详情
12. 消息列表（标记全部已读）

## 项目结构

``` bash
├─build             // 项目构建(webpack)相关代码
├─config            // 项目开发环境配置
│       
├─src               // 项目主文件夹  
│  │  App.vue       // 页面入口文件
│  │  main.js       // 程序入口文件，加载各种公共组件
│  │  
│  ├─assets         // 静态资源，图片、公用样式
│  ├─components     // 公共组件
│  ├─router         // 页面路由配置
│  ├─store          // vuex的状态管理
|  ├─utils          // 公用方法
│  ├─views          // 页面组件
│  ├─App.vue        // 页面入口文件
│  └─main.js        // 程序入口文件，加载各种公共组件
│              
└─static           // 静态文件目录
├─.babelrc         // ES6语法编译配置
├─.editorconfig    // 定义代码格式
├─.gitignore       // git的文件过滤配置
├─.postcssrc.js    // less相关配置
├─README.md        // 项目说明
├─index.html       // 程序入口页面
└─package.json     // 项目相关信息配置
 
```

## 下载和启动

``` bash
# 下载源码
git clone https://github.com/mrsxl/vue-cnode.git

# 安装依赖
npm install

# 启动开发环境
npm run dev

# 打包项目
npm run build
```

