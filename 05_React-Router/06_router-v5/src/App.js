import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Menu from './Components/Menu'
import Students from './Components/Students'
/*
component用来指定路由匹配后被挂载的组件
    component需要直接传递组件的类
    通过component构建的组件，它会自动创建组件并且会自动传递参数(所以不能直接写JSX)
        match -- 匹配的信息 {path: '/about', url: '/about', isExact: true, params: {…}}
            isExact 检查路径是否完全匹配
            params 请求的参数
        location -- 地址信息 {pathname: '/about', search: '', hash: '', state: null}
        history -- 控制页面的跳转  {length: 2, action: 'PUSH', location: {…}, createHref: ƒ, push: ƒ, …}
            push() 跳转页面
            replace() 替换页面
            */
export default function App() {
    return (
        <div>
            <Menu />
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            {/* /student/:id 会匹配到 /student/xxx  冒号开头后边是传的参数，存在match的params里*/}
            <Route path="/students/:id" component={Students}></Route>
        </div>
    )
}
