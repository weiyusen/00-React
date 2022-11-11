import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Menu from './Components/Menu'
export default function App() {
    return (
        <div>
            <Menu/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
        </div>
    )
}
