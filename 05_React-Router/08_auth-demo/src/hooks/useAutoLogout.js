import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/reducer/authSlice';
import {useEffect} from 'react';

const useAutoLogout = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    // 创建一个useEffect, 用来处理登录状态
    useEffect(() => {
        const timeout = auth.expirationTime - Date.now()
        if(timeout < 6000){
            // 小于6秒就直接登出
            dispatch(logout())
            return;
        }
        const timer = setTimeout(() => {dispatch(logout())}, timeout)
        return () => { //返回一个清理定时器的函数 会自动执行
            // console.log(111); 
            clearTimeout(timer)
        }
    }, [auth]);
}

export default useAutoLogout