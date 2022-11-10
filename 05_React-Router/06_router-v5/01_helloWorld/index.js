import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

/*
* react router 可以将url地址和组件进行映射
*      当用户访问某个地址时，与其对应的组件会自动的挂载
*
* react router 使用步骤
*       1. 引入react-router-dom包
*       2. 在index.js中引入BrowserRouter组件
*       3. 将BrowserRouter设置为根组件
*
* */
/*
React Router为我们提供一种被称为客户端路由的东西，通过客户端路由可以将URL地址和React组件进行映射，
当URL地址发生变化时，它会根据设置自动的切换到指定组件。并且这种切换完全不依赖于服务器。换句话说，在用户看来
浏览器的地址栏确实发生了变化，但是这一变化并不由服务器处理，而是通过客户端路由进行切换
最新版本为6， 版本6和版本5之间的变化跨度比较大
安装： yarn add react-router-dom@5
*/ 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);

