import React, { useMemo, useState } from 'react';
import Some from "./components/Some";

function sum(a, b) {
    // 减速，让函数执行时间延长1秒
    const begin = Date.now()
    while(1){
        if(Date.now() - begin > 1000){
            break;
        }
    }
    console.log('函数执行了');
    return a + b;
}

const App = () => {
    const [count, setCount] = useState(1)

    let a = 123
    let b = 456
    if(count % 10 === 0){
        a += count
    }

    // sum函数每次组件渲染时都会重新执行
    // const result = sum(123, 456)

    // 如果不想让这个函数每次都重新执行，就用useMemo
    // 传一个回调函数和依赖数组
    const result = useMemo(() => {
        // useMemo用来存储函数的执行结果    返回的是结果
        // return sum(123, 456)
        return sum(a, b)
    }, [a,b])

    const someEle = useMemo(() => {
        return <Some a={a} b={b}></Some>
    }, [a,b])

    return (
        <div>
            <h1>App</h1>
            {/* <h2>result: {result}</h2> */}
            <h3>{count}</h3>
            {/* 每次点的时候，sum函数都会重新执行 */}
            <button onClick={() => setCount(prevstate => prevstate + 1)}>点我</button>

            {/* <Some a={10} b={22}></Some> */}
            {/* 还可以缓存组件 */}
            {someEle}
        </div>
    );
};

export default App;
