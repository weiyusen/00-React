import React, { useState, useCallback } from 'react';
import A from './components/A'

const App = () => {
    console.log('App渲染');
    const [count, setCount] = useState(1);
    // const clickHandler = () => {
    //     setCount(prev => prev + 1)
    // }
    const [num, setNum] = useState(1);

    const clickHandler = useCallback(() => {
        setCount(prev => prev + num)
        console.log(num);
        /**如果num不添加到依赖数组里：
         * 用了useCallback后，只在初始化的时候执行一次，那么作用域是组件第一次执行时的作用域，那里的num是1
         * 所以之后每次点击的时候，加的num也是1
         */
        setNum(prev => num + 1)
    }, [num])  //依赖数组发生变化的时候才会重新调用，如果不写则意味着每次都会重新创建   
    // 如果传的是空数组就是只在初始化的时候执行一次，之后就不执行了
    // setCount的东西放不放没有区别，因为它本身就是不会变的东西

    return (
        <div>
            <h2>App - {count}</h2>
            <button onClick={clickHandler}>增加</button>
            <A onAdd={clickHandler}></A>
        </div>
    );
}

export default App;
/**
 * 这里的问题是 给A组件用memo包装， 在App那里传了一个事件 onAdd , 如果点的是App的按钮，A组件仍然会重新渲染
 * 原因：点App的按钮，App肯定是重新渲染的，而重新渲染会把代码重新执行一遍，自然props传的响应函数也重新执行了，因此props变了，A的memo就识别到
 * 
 * 引入 useCallback  是一个钩子函数，用来创建React中的回调函数
 * useCallback 创建的回调函数不会总在组件重新渲染时重新创建
 */


/*
*   useCallback()
*       参数：
*           1. 回调函数
*           2. 依赖数组
*               - 当依赖数组中的变量发生变化时，回调函数才会重新创建
*               - 如果不指定依赖数组，回调函数每次都会重新创建
*               - 一定要将回调函数中使用到的所有变量都设置到依赖数组中
*                   除了（setState）
* */
