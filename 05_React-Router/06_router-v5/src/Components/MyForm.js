import React,{useState} from 'react';
import {Prompt} from 'react-router-dom'

const MyForm = () => {
    const [isPrompt, setIsPrompt] = useState(false)
    return (
        <div>
             {/* Prompt用于离开页面时弹出提示,当when的值为true的时候才有，是false的时候没有提示，默认有 */}
            <Prompt message={"将要离开页面，确认吗？"} when={isPrompt}></Prompt>
            <h2>表单</h2>
           {/* 如果用户输入了内容，离开页面时弹出提示 */}
            <input type="text" onChange={e => setIsPrompt(e.target.value.trim().length !== 0 ? true : false)}/>
        </div>
    );
}

export default MyForm;
