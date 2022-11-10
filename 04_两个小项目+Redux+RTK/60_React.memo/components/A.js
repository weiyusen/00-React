import React,{useState} from 'react';
import B from './B'

const A = () => {
    console.log('A渲染');
    const [count, setCount] = useState(1);
    const clickHandler = () => {
        // B组件收到的porps改变时会重新渲染
        setCount(prev => prev + 1)
    }
    const test = count % 4 === 0
    return (
        <div>
            <h2>组件A - {count}</h2>
            <button onClick={clickHandler}>增加</button>
            <B test={test}></B>
        </div>
    );
}

export default A;