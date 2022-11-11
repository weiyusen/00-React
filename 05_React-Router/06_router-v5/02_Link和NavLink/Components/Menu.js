import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import classes from './Menu.module.css'
/*
*   在使用react router时，一定不要使用a标签来创建超链接
*       因为a标签创建的超链接，会自动向服务器发送请求重新加载页面
*       而我们不希望这种情况发生
*
*   可以使用Link组件来创建超链接,本质是a标签，但不会发请求
*   NavLink和Link作用相似，只是可以指定链接激活后的样式
* */
const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    {/* <Link to="/">主页</Link> */}
                    {/* exact和之前一样，用来严格匹配 */}
                    {/* activeClassName激活后的类名 activeStyle激活后的样式名 */}
                    <NavLink exact activeClassName={classes.active} activeStyle={{textDecoration:"underline"}} to="/">主页</NavLink>
                </li>
                <li>
                    {/* <Link to="/about">关于</Link> */}
                    <NavLink activeClassName={classes.active} to="/about">关于</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
