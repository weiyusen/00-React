import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // react的严格模式
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


// npx create-react-app react-app  最后面的是项目名字
// 多了 单元测试和网站性能统计
/**
 *  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",        这三个是单元测试
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"      这个是网站性能统计
  },
  "scripts": {  
    "start": "react-scripts start",    
    "build": "react-scripts build",  
    "test": "react-scripts test",  多了单元测试命令
    "eject": "react-scripts eject"  把webpack配置文件暴露出来 调完不能回退，尽量不用这个命令
  },
 */

  // 项目结构
  /**
   * public里的favicon.ico 是收藏图标    rebots.txt用于搜索引擎   manifest.json用于配置手机桌面文件
   */