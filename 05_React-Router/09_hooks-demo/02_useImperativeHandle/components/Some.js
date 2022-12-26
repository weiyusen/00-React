import React, {useImperativeHandle, useRef} from 'react';

/*
*   React.forwardRef()
*       可以用来指定组件向外部暴露的ref
* */
// React.forwardRef对组件进行包装，经过包装后，组件多了一个参数ref
const Some = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const clickHandler = () => {
        // 点击按钮 获取文本值
        console.log(inputRef.current.value);
    };

    // useImperativeHandle 可以用来指定ref返回的值
    // 第一个参数是ref（就是上面的ref），第二个是回调函数
    useImperativeHandle(ref, ()=>{
        // 回调函数的返回值，会成为ref的值   可以不是dom对象
        return {
            // 返回一个操作dom对象的方法   让dom操作权限更清晰，降低出现误操作的可能性
            changeInpValue(val){
                inputRef.current.value = val;
            }
        };
    });

    return (
        <div>
            {/* <h2 ref={ref}>Some</h2> */}
            <h2>Some</h2>
            <input ref={inputRef} type="text"/>
            <button onClick={clickHandler}>Some BTN</button>
        </div>
    );
});

export default Some;
