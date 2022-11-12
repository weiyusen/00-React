import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const About = () => {
    return (
        <div>
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
