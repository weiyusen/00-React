import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRegisterMutation, useLoginMutation } from "../store/api/authApi"
import { login } from '../store/reducer/authSlice';

const AuthForm = () => {
    //记录当前表单是登录用的还是注册用的
    const [isLoginForm, setIsLoginForm] = useState(true)

    // 引入注册的api 
    // useRegisterMutation返回一个数组，第一个是方法触发器，第二个是结果集
    const [regFn, { error: regError }] = useRegisterMutation()
    // 引入登录的api
    const [loginFn, { error: loginError }] = useLoginMutation()

    // 简单起见，用非受控组件
    const usernameInp = useRef()
    const pwdInp = useRef()
    const emailInp = useRef()

    // 获取dispatch
    const dispatch = useDispatch()
    // 获取Navigate
    const navigate = useNavigate()
    const location = useLocation()
    // console.log("authForm->", location.state.preLocation);
    const from = location.state?.preLocation?.pathname || "/"
    // console.log(from);

    const submitHandler = (e) => {
        e.preventDefault(); //不让表单自主提交
        // 获取用户输入的内容 三步骤：1、通过useRef()生成一个对象 2、在jsx中通过ref={name}打标识 3、在这里拿到，里面的current指向DOM对象
        const username = usernameInp.current.value
        const password = pwdInp.current.value
        // 处理登录功能
        if (isLoginForm) {
            // console.log('登录--', username, password);
            loginFn({
                identifier: username,
                password
            }).then(res => {
                console.log(res);
                if (!res.error) {
                    dispatch(login({
                        token: res.data.jwt,
                        user: res.data.user
                    }))
                    // 登录成功 需要向系统中添加一个标识，标记用户的登录状态
                    // 登录状态（布尔值, jwt(token), 用户信息)
                    // 跳转页面到之前的目录
                    navigate(from, { replace: true })
                }
            })
        } else { //注册
            const email = emailInp.current.value
            // regFn的结果是一个promise
            regFn({
                username,
                password,
                email
            }).then(res => {
                if (!res.error) {
                    // 注册成功
                    setIsLoginForm(true) //让用户回到登录表单
                }
            })
        }
    }
    return (
        <div>
            <p style={{ color: 'red' }}>
                {/* 显示错误信息 */}
                {regError && regError.data.error.message}
            </p>
            <p style={{ color: 'red' }}>
                {/* 显示错误信息 */}
                {loginError && "用户名或密码错误"}
            </p>
            <h2>{isLoginForm ? '登录' : '注册'}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input ref={usernameInp} type="text" placeholder='用户名' />
                </div>
                {
                    // 注册才显示  需要电子邮件的div
                    !isLoginForm &&
                    <div>
                        <input type="email" ref={emailInp} placeholder='电子邮件' />
                    </div>
                }
                <div>
                    <input ref={pwdInp} type="password" placeholder='密码' />
                </div>
                <div>
                    <button>{isLoginForm ? '登录' : '注册'}</button>
                    <a href="#" onClick={e => { e.preventDefault(); setIsLoginForm(prevState => !prevState) }}>
                        {isLoginForm ? '没有账号？点击注册' : '已有账号？点击登录'}
                    </a>
                </div>
            </form>
        </div>
    );
}

export default AuthForm;
