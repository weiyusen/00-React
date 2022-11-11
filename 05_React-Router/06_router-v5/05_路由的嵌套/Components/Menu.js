import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import classes from './Menu.module.css'

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
                <Link to="/students">学生</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
