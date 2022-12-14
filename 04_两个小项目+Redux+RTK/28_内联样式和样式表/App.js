import React, { useState } from 'react';
import './App.css'

const App = () => {
    const [redBorder, setRedBorder] = useState(true)
    const pStyle = { color: 'red', backgroundColor: '#bfa', border: redBorder ? "red solid 1px" : "blue solid 1px" }
    const clickHandler = () => {
        setRedBorder(false)
    }
    return (
        <div>
            {/* 内联样式 */}
            {/* <p style={{color:'red', backgroundColor:'#bfa', border:"blue solid 1px"}}>我是一个段落</p> */}
            {/* <p style={pStyle}>我是一个段落</p> */}

            <p className={`p1 ${redBorder ? '' : 'blueBorder'}`}>我是一个段落</p>
            <button onClick={clickHandler}>点我一下</button>
        </div>
    );
}

export default App;
