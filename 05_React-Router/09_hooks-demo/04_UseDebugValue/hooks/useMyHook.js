import {useDebugValue, useEffect} from "react";
// 自定义钩子要use开头
const useMyHook = () => {
    // 调试工具里能看到钩子名字为‘哈哈’   
    useDebugValue('哈哈');

    useEffect(()=>{
        console.log('自定义钩子的代码');
    });

};

export default useMyHook;
