import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'
import Layout from './components/Layout';

const App = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path={"/"} element={<HomePage></HomePage>}></Route>
                    <Route path={"/profile"} element={<ProfilePage></ProfilePage>}></Route>
                    <Route path={"/auth-form"} element={<AuthPage></AuthPage>}></Route>
                </Routes>
            </Layout>

        </div>
    );
}

export default App;
