import {Route, Switch, Redirect} from "react-router-dom";
import React,{useState} from 'react'
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import MyForm from './Components/MyForm'
import Login from './Components/Login'

function App() {
    const[isLogin, setIsLogin]  = useState(false)
    return (
        <div className="App">
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path={"/login"}><Login></Login></Route>
                <Route path='/form'>
                    {   
                    // Redirect可以用于鉴权
                        isLogin ? <MyForm></MyForm> : <Redirect to={"/login"}></Redirect>
                    }
                    
                </Route>
                {/* Redirect还可以加一个 from 属性 */}
                {/* <Redirect from={"/abc"} to={"/form"}></Redirect> */}


                <Route path="*">
                    <div>路径错误</div>
                </Route>
            </Switch>
        </div>

    );
}

export default App;
