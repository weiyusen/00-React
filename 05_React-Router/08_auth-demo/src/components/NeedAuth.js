import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";

const NeedAuth = (props) => {
    // 获取登录信息
    const auth = useSelector(state => state.auth)
    // location里保存了路径的信息，可以通过state向后面的页面传递数据
    const location = useLocation()
    // 如果登录了就返回children（标签体）， 没登陆就重定向到登录页面
    return auth.isLogged ? props.children : <Navigate to={"/auth-form"} replace state={{preLocation:location}}></Navigate>
}

export default NeedAuth;
