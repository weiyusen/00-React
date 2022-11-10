import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>   
        <App/>
    // </React.StrictMode>
);

/*
    为了解决state带来的不便，React提供了reducer对state进行整合
    作用是将那些和同一个state相关的所有函数都整合到一起，方便在组件中进行调用
*/ 
 