import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

// 设置移动端的适配
// 动态设置 rem大小   除以几，视口的宽度就是多少rem，这里设置视口的总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);


