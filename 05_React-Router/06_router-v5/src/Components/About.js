import React from 'react';
import Hello from "./Hello";
import {Route, useRouteMatch, Redirect} from "react-router-dom";

const About = (props) => {

    const {path} = useRouteMatch();


    const clickHandler = ()=>{


    };
    return (
        <div>
            {/* Redirect 用于跳转页面 默认是用的是replace进行跳转   可以加个push属性表示使用push进行跳转*/}
            <Redirect push to={"/form"}></Redirect>
            <button onClick={clickHandler}>点我一下</button>
            <h2>关于我们，其实是师徒4人</h2>
            <ul>
                <li>孙悟空</li>
                <li>猪八戒</li>
                <li>沙和尚</li>
                <li>唐僧</li>
            </ul>

            <Route path={`${path}/hello`}>
                <Hello/>
            </Route>
        </div>
    );
};

export default About;
