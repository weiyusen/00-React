import React from 'react';
import MainMenu from './MainMenu';
// 布局组件，把App里的模板定出来
const Layout = (props) => {
    return (
        <div>
            <MainMenu></MainMenu>
            <hr />
            {/* props.children 表示组件的标签体 */}
            {props.children}
        </div>
    );
}

export default Layout;
