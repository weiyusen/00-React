import React from 'react';
import ReactDOM from 'react-dom/client';
/*
下面这两个 index.css里对p1设了样式，  App里引入的app.js对p1也设置了样式，
所以谁生效是看index.js里先引的谁，这里是app.css里会生效
*/ 
import './index.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


