import React,{useState} from 'react';
import A from './components/A'

const App = () => {
    console.log('App渲染');
    const [count, setCount] = useState(1);
    const clickHandler = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h2>App - {count}</h2>
            <button onClick={clickHandler}>增加</button>
            {/* 父组件App渲染，会导致所有的子组件（A，B）都重新渲染
                但B组件没有自己的state，没有必要每次都重新渲染，因为每次渲染的结果都是一样的
                这时就可以用React.memo()进行包装  见B组件
            */}
            <A></A> 
        </div>
    );
}

export default App;
/**
 * React组件重新渲染的两种情况：
 *   1、当组件自身的state发生变化时
 *   2、当组件的父组件重新渲染时
 */