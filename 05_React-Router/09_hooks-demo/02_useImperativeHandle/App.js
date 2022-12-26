import React, {useEffect, useRef, useState} from 'react';
import Some from "./components/Some";



const App = () => {
    const [count, setCount] = useState(1);

    const someRef = useRef();

    useEffect(()=>{
        // console.log(someRef);
        // someRef.current.innerText = 'Some' + count;
        someRef.current.changeInpValue(count);
    });


    return (
        <div>
            <h1>App</h1>
            <h3>{count}</h3>
            <button onClick={()=>setCount(prevState => prevState + 1)}>点我</button>

            {/*
                无法直接去获取react组件的dom对象，
                    因为一个react组件中可能含有多个dom对象
                    React也不知道要给你谁
            */}
            {/* ref是帮助我们获取原生的dom对象的，不能用来获取自定义的react组件 */}
            {/* 需要在组件中使用React.forwardRef()进行包裹，把想返回的部分打上ref={ref} */}
            <Some ref={someRef}/>
        </div>


    );
};

export default App;
