import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import classes from './Menu.module.css'

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName={classes.active} activeStyle={{textDecoration:"underline"}} to="/">主页</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/about">关于</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
