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
                <Route path="about" element={<About/>}>
                    <Route path="hello" element={<Hello></Hello>}></Route>
                    <Route path="abc" element={<Abc></Abc>}></Route>
                </Route>
                <Route path="student/:id" element={<Student/>}></Route>
            </Routes>

        </div>
    );
};

export default App;
