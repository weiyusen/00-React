import React, {useEffect, useInsertionEffect, useLayoutEffect, useRef, useState} from 'react';
/**
 * useEffect: 组件挂载->state改变->DOM改变->绘制屏幕->触发useEffect
 * useInsertionEffect: 组件挂载->state改变->触发useInsertionEffect->DOM改变->绘制屏幕
 * useLayoutEffect: 组件挂载->state改变->DOM改变->触发useLayoutEffect->绘制屏幕
 * 
 * useLayoutEffect可以用来修改样式
 * useInsertionEffect可以用来添加新的元素，性能更好，因为如果是在DOM改变之后加新元素会重新再渲染一次
 * 执行时机 useInsertionEffect > useLayoutEffect > useEffect
 */


const App = () => {
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(false);
    const h3Ref = useRef();
    const divRef = useRef();

    useEffect(()=>{
        //console.log('useEffect', h3Ref);
        if(!divRef.current) return; 

        // 修改样式   用useEffect修改样式,屏幕会出现闪烁，因为是在渲染完毕再执行的，又重新渲染了
        // 如果是用的useLayoutEffect则不会闪
        // 但是react18进行了修改，所以这里看不出区别了  使用主要还是用useEffect了
        divRef.current.style.marginTop = "200px";
    }, [show]);

    useLayoutEffect(()=>{
        console.log('useLayoutEffect', h3Ref);
    });

    useInsertionEffect(()=>{
        // 访问不到h3Ref，因为dom改变还没有实现
        console.log('useInsertionEffect', h3Ref);
    });



    return (
        <div>
            <h1>App</h1>
            <h3 ref={h3Ref}>{count}</h3>
            <button onClick={()=>setCount(prevState => prevState + 1)}>点我</button>
            <hr/>
            <button onClick={()=>setShow(prevState => !prevState)}>显示/隐藏</button>
            {
                show && <div ref={divRef} style={{width:100, height:100, backgroundColor:"red"}}/>
            }
        </div>


    );
};

export default App;
