import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'
import Layout from './components/Layout';
import NeedAuth from './components/NeedAuth';
import useAutoLogout from './hooks/useAutoLogout';
import StudentPage from './pages/StudentPage';


const App = () => {
    useAutoLogout()
    return (
        <div>
            <Layout>
                
                <Routes>
                    <Route path={"/"} element={<HomePage></HomePage>}></Route>
                    <Route path={"/profile"} element={
                        <NeedAuth>
                            <ProfilePage></ProfilePage>
                        </NeedAuth>
                    }></Route>
                    <Route path={"/auth-form"} element={<AuthPage></AuthPage>}></Route>
                    <Route path={"/student"} element={<NeedAuth><StudentPage></StudentPage></NeedAuth>}></Route>
                </Routes>
            </Layout>

        </div>
    );
}

export default App;
