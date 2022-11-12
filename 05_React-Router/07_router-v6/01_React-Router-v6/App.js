import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Menu/>

            {/*
                Routes 是v6中新增加的组件
                    作用和Switch类似，都是用于Route的容器，但v5中的Switch是可写可不写的，而v6中的Routes是必须写的
                    Routes中Route只有一个会被匹配
                v6中，Route的component render children都变了（component render直接没了，children有其它作用，不能传组件了）
                    需要通过element来指定要挂载的组件，传的直接就是JSX，而不是类
            */}
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                {/* v6的path的斜杠可以省略，它会自动去补 */}
                {/* v6默认就是严格匹配 */}
                <Route path="about" element={<About/>}></Route>
            </Routes>

        </div>
    );
};

export default App;
