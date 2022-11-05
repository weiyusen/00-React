import React, { useState, useReducer } from 'react'
// useReducer(reducer, initialArg, init)
/*
*   参数：
*       reducer : 整合函数
*           对于我们当前state的所有操作都应该在该函数中定义
*           该函数的返回值，会成为state的新值
*           reducer在执行时，会收到两个参数：
*               state 当前最新的state
*               action 它需要一个对象
*                       在对象中会存储dispatch所发送的指令
*       initialArg : state的初始值，作用和useState()中的值是一样
        init: 懒惰初始化函数
*   返回值：
*       数组：
*           第一个参数，state 用来获取state的值
*           第二个参数，state 修改的派发器
*                   通过派发器可以发送操作state的命令
*                   具体的修改行为将会由另外一个函数(reducer)执行（就是我们传的第一个参数（函数））
*
* */

// 为了避免reducuer会重复创建，通常reducer会定义到组件的外部
const countReducer = (state, action) => {
    // console.log("reducer执行了", state);
    // 整合的作用体现在这里，根据不同的dispatch派发的任务实现不同的功能
    // 可以根据action中不同的type来执行不同的操作
    // console.log(action.type);
    // if (action.type === 'ADD') {
    //     return state + 1
    // } else if (action.type === 'SUB') {
    //     return state - 1
    // }
    // return state //以防用户传的值无效

    // 也可以用switch，更清晰
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'SUB':
            return state - 1
        default:
            return state
    }
}


const App = () => {
    /*  之前的做法
        const [count, setCount] = useState(1)
    
        const addHandler = () => {
            setCount(prevState => prevState + 1)
        }
    
        const subHandler = () => {
            setCount(prevState => prevState - 1)
        }
    */

    // 使用useReducer
    const [count, countDispatch] = useReducer(countReducer, 1)
    const addHandler = () => {
        // 增加count的值
        countDispatch({ type: 'ADD' })
    }
    const subHandler = () => {
        // 减少count的值
        countDispatch({ type: 'SUB' })
    }
    return (
        <div style={{ fontSize: 30, width: 200, height: 200, margin: '100px auto', textAlign: 'center' }}>
            <button onClick={subHandler}>减少</button>
            {count}
            <button onClick={addHandler}>增加</button>
        </div>
    )
}

export default App