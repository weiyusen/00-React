import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">主页</Link>
                </li>
                <li>
                    <Link to="/about">关于</Link>
                </li>
                <li>
                    {/* 当链接被激活的时候，NavLink可以做一个不同的显示 */}
                    {/* 与v5不同的是不再支持加属性 activeStyle={{backgroundColor:'yellow'} 这种方式了 
                    而是直接通过style来
                */}
                    {/* 这种是写死了样式 */}
                    {/* <NavLink to="/student/2" style={{backgroundColor:'yellow'}}>学生</NavLink> */}
                    <NavLink to="/student/2" style={
                        ({isActive}) => {
                            // 当链接被选中的时候，isActive的值为true
                            console.log(isActive);
                            return isActive ? { backgroundColor: 'yellow' } : null
                        }
                    }>学生</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
