import {Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import MyForm from "./Components/MyForm";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path='/form'>
                    <MyForm></MyForm>
                </Route>
                <Route path="*">
                    <div>路径错误</div>
                </Route>
            </Switch>
        </div>

    );
}

export default App;
