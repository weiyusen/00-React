import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import Hello from './Hello';

const About = () => {
    return (
        <div>
            <h2>关于我们，其实是四个人</h2>
            <ul>
                <li>刘备</li>
                <li>关羽</li>
                <li>张飞</li>
                <li>赵云</li>
            </ul>

            {/* 这么写不太好维护，更希望所有路由写在统一的一个位置(App.js) */}
            {/* 通过子路由来对Hello进行映射 即只有访问about/hello时才显示*/}
                {/* v6的path会自动拼接，所以这里可以直接写hello */}
            {/* <Routes>
                <Route path='hello' element={<Hello></Hello>}></Route>
            </Routes> */}


            {/* Hello的挂载规则是在App.js里指定的，希望Hello在About组件里显示
                所以About这里要用Outlet

                Outlet 用来表示嵌套路由中的组件
                    当嵌套路由中的路径匹配成功了，Outlet则表示嵌套路由中的组件
                    当嵌套路由中的路径没有匹配成功，Outlet就什么都不是
            */}
            <Outlet></Outlet>
        </div>
    );
};

export default About;
