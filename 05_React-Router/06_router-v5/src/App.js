import {Route, Switch, Redirect} from "react-router-dom";
import React,{useState} from 'react'
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import MyForm from './Components/MyForm'

function App() {
    const[isLogin, setIsLogin]  = useState(true)
    return (
        <div className="App">
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path='/form'>
                    {
                        isLogin ? <MyForm></MyForm> : <div>请登录后再操作</div>
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
