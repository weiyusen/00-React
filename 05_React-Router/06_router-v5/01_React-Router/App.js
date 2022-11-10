import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
/*将路由和组件进行映射
使用Route来映射地址和组件
    属性：
        path 映射的url地址    /表示根目录   默认匹配的是开头
        component 要挂载的组件  不要写JSX，直接写组件类名
        exact 路径是否完整匹配，默认值false

当Route的路径被访问，其对应组件就会自动挂载
  注意 默认情况下Route并不是严格匹配
    只要url地址的头部和path一致，组件就会挂载，不会检查子路径  比如是localhost:3000/about/abc时，Home和About组件都会显示
    可以通过exact去指定严格匹配，不匹配子路径
*/
export default function App() {
    return (
        <div>App组件
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
        </div>
    )
}
