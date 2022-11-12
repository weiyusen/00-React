import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Student from "./components/Student";

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="about" element={<About/>}></Route>
                {/* 传参数一样 */}
                <Route path="student/:id" element={<Student/>}></Route>
            </Routes>

        </div>
    );
};

export default App;
