import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../store/reducer/authSlice';

const MainMenu = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    // console.log(auth);
    return (
        <header>
            <ul>
                <li>
                    <Link to={'/'}>首页</Link>
                </li>
                {
                    !auth.isLogged && <li>
                        <Link to={'/auth-form'}>登录/注册</Link>
                    </li>
                }
                {
                    auth.isLogged &&
                    <>
                        <li>
                            <Link to={'/profile'}>{auth.user.username}</Link>
                        </li>
                        <li>
                            <Link to={"/student"}>学生信息</Link>
                        </li>
                        <li>
                            <Link to={'/'} onClick={() => dispatch(logout())}>登出</Link>
                        </li>
                    </>
                }

            </ul>
        </header>
    );
}

export default MainMenu;
