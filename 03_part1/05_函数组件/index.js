/*
*   组件
*       - React中组件有两种创建方式
*       - 函数式组件   更推荐使用
*           - 函数组件就是一个返回JSX的普通
*           - 组件的首字母必须是大写
*       - 类组件  涉及到this，比较烦
* */
import ReactDOM from "react-dom/client";
// 如果把所有组件组件都写到一个文件里，在开发中是不好维护的，所以通常组件是独立的文件
// function App(){
//     return <div>Hello React!!!</div>
// }
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));

// React组件可以直接通过JSX渲染
// 相当于root.render(App());
root.render(<App/>);

