import React from 'react';
import useMyHook from "./hooks/useMyHook";

// useDebugValue:用来给自定义钩子设置标签，标签会在React开发工具中显示，用来调试自定义钩子，不常用
const App = () => {
    useMyHook();

    return (
        <div>
            <h1>App</h1>
        </div>


    );
};

export default App;
