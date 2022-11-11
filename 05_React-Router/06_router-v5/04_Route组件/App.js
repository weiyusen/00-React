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
            push() 跳转页面 A->B->C 在C点回退是可以回退到B的 即会产生一个新的历史记录  
            replace() 替换页面  A->B->C 是用C页面替换B页面，在C点回退是回退到A的
            goBack() 回退
            goForward() 前进
            go(n) 根据传的数去跳转，-1即往后跳
            */
export default function App() {
    return (
        <div>
            <Menu />
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            {/* /student/:id 会匹配到 /student/xxx  冒号开头后边是传的参数，存在match的params里*/}
            {/* 查询字符串是在location的search内 search:"?name=admin" */}
            {/* <Route path="/students/:id" component={Students}></Route> */}

            {/* 方式二 */}
            {/* 用Component的一个局限是传的是类，不能用JSX，无法自定义组件的属性，所以提供了render方式 */}
            {/*
                render 也可以用了指定要挂载的组件
                    render需要一个回调函数作为参数，回调函数的返回值会最终被挂载
                    render不会自动传递三个属性 match、location、history, 是作为参数传进了回调函数中
            */}
            {/* <Route path="/students/:id" render={(routeProps) => {
                // console.log(routeProps);
                return <Students {...routeProps}></Students>
            }}></Route> */}

            {/* 方式三 */}
            {/*
                children 也可以用来指定被挂载的组件
                    用法有两种：
                        1. 和render类似，传递回调函数
                            - 当children设置一个回调函数时，该组件无论路径是否匹配都会挂载
                        2. 可以传递组件
            */}
            {/* <Route path="/students/:id" children={(routeProps) => {
                return <Students {...routeProps}></Students>
            }}></Route> */}
            {/* <Route path="/students/:id" children={<Students/>}></Route> */}
            {/* <Route path="/students/:id"><Students/></Route> */}
            <Route path="/students/:id">{(routeProps) => <Students {...routeProps}/>}</Route>
        </div>
    )
}
