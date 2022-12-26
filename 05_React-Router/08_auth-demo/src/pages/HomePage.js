import React from 'react';
import Home from '../components/Home';
// pages文件夹下的组件不写逻辑  去管理每个页面用到的组件
// 页面级组件，使项目结构更加清晰
const HomePage = () => {
    return (
        <div>
            <Home></Home>
        </div>
    );
}

export default HomePage;
