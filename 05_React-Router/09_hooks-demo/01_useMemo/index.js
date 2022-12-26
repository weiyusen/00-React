import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

/**
 * 钩子的使用需要记住：
 *      1、钩子只能在React函数组件和自定义钩子中使用
 *      2、钩子不能再嵌套函数或其它语句（if\switch\while\for等）中使用
 * React中自带的钩子函数
 *  useState
 *  useEffect
 *  useContext 
 *  useReducer
 *  useCallback   缓存函数
 *  useRef
 *  useMemo       缓存函数结果
 *  useImperativeHandle
 *  useLayoutEffect
 *  useDebugValue
 */

