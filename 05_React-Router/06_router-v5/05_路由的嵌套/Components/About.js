import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom'
import Hello from './Hello'


const About = (props) => {
    const {path} = useRouteMatch()
    const clickHandler = () => {
    
    }
    return (
        <div>
            <div>
                <button onClick={clickHandler}>按钮</button>
                <h2>关于我们，其实是师徒4人</h2>
                <ul>
                    <li>孙悟空</li>
                    <li>猪八戒</li>
                    <li>沙和尚</li>
                    <li>唐僧</li>
                </ul>
                {/* 也可以直接写在这里 v5的不能直接写hello*/}
                 <Route path={`${path}/hello`}>
                    <Hello></Hello>
                </Route>
            </div>
        </div>
    );
}

export default About;
