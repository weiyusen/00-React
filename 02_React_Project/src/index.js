/**
 * 通过npm手动创建
 * - npm init -y 或 yarn init -y
 * - 安装依赖 yarn add react react-dom react-scripts
   - 运行 npx react-script start启动项目  或者加到scripts里
 */


// src/index.js 是js的入口文件
// 引入ReactDOM  
// 18以前可以直接import ReactDOM from 'react-dom'  但是18需要加上/client
// 因为18把ReactDOM分成了 client 用于浏览器端渲染页面 和 server 用于服务器端渲染页面 两个库
import ReactDOM from 'react-dom/client';

// 创建一个JSX
const App = <div>
    <h1>这是一个React项目</h1>
    <p>我终于有了第一个React项目了!!!</p>
</div>;

// 获取一个根容器
const root = ReactDOM.createRoot(document.getElementById('root'));
// 将App渲染进根容器
root.render(App);
// 运行打包  npx react-scripts build
// 注意打包后的build文件夹下的index.html 直接运行有问题，因为src打包是设的根路径，所以要把它加个.  即src="./static/js/main.f5172cc9.js"

// npx react-scripts start 则会启动webpack的内置的测试服务器，会实时的进行编译

/*  如果在package.json里的script加上 "start": "react-scripts start","build": "react-scripts build"
    则可以进一步将上面两个命令简化为npm start 和 npm run build
    还可以加上
    "eslintConfig": {
      "extends": [
        "react-app"
      ]
    }
    配置对react的语法检查
*/
/*
我们的React项目通过npm包管理器去维护，因此在交给浏览器运行之前需要进行打包
但是手动配置webpack又比较麻烦
因此React提供了react-script包，里面集成了webpack、babel、测试等

安装  yarn add react react-dom react-scripts

约定优于配置
符合以下约定就不用额外配置了
约定：
根目录
  -public
    -index.html(添加标签 <div id="root"></div>)  作为首页的模板
  -src
    -App.js
    -index.js   入口文件 

*/