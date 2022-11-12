import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Student from "./components/Student";
import Hello from "./components/Hello";
import Abc from "./components/Abc";

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                {/* 访问about开头的任意路径都能挂载（关闭严格匹配），相当于v5里面默认的情况（没有严格匹配） */}
                {/* <Route path="about/*" element={<About/>}></Route> */}
                <Route path="about" element={<About/>}>
                    {/* v6的标签体不能用来设置挂载组件了，新的功能是用来嵌套路由 */}
                    <Route path="hello" element={<Hello></Hello>}></Route>
                    <Route path="abc" element={<Abc></Abc>}></Route>
                </Route>
                <Route path="student/:id" element={<Student/>}></Route>
            </Routes>

        </div>
    );
};

export default App;
