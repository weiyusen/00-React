import React, { useState, useEffect } from 'react';
import B from './B';

const App = () => {

    console.log('App组件重新渲染了！');

    const [count, setCount] = useState(0);

    // setTimeout(() => { setCount(1); }, 0) 也行 但是useEffect提供了比setTimeout更强的功能
    /**
     * useEffect()是一个钩子函数，需要一个函数作为参数
       这个作为参数的函数，将会在组件渲染完毕后执行   相当于vue的mounted
       在开发中，可以将那些会产生副作用的代码编写到useEffect的回调函数中
       这样就可以避免这些代码影响到组件的渲染
     */
    useEffect(() => {
        setCount(1)
    });

    const clickHandler = () => {
        console.log('点击按钮！');
        setCount(1);
    };

    return (
        <div>
            {count}

            <B />
            <button onClick={clickHandler}>点我一下</button>
        </div>
    );
};

export default App;
