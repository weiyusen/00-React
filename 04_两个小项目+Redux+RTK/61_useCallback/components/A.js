import React, { useState, useCallback } from 'react';
import B from './B'

const A = (props) => {
    console.log('A渲染');
    const [count, setCount] = useState(1);

    const clickHandler = () => {
        setCount(prev => prev + 1)
    }
    const test = count % 4 === 0
    return (
        <div>
            <h2>组件A - {count}</h2>
            <button onClick={clickHandler}>增加</button>
            <button onClick={props.onAdd}>增加App</button>
            <B test={test}></B>
        </div>
    );
}

export default React.memo(A)