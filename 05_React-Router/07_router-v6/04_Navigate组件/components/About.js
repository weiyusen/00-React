import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const About = () => {
    return (
        <div>
            {/* 
            Navigate作用与v5的Redirect组件一样但Redirect默认用的是replace
            Navigate 组件用来跳转到指定的位置  默认使用push跳转 可以加一个replace属性改为replace跳转

            功能和参数和钩子里的useNavigate一样帮助我们跳转，useNavigate是使用钩子的方式去引入一个对象帮助我们跳转
            Navigate则是组件的方式
             */}
            <Navigate to='/student/1' replace></Navigate>
            <h2>关于我们，其实是四个人</h2>
            <ul>
                <li>刘备</li>
                <li>关羽</li>
                <li>张飞</li>
                <li>赵云</li>
            </ul>
            <Outlet></Outlet>
        </div>
    );
};

export default About;
