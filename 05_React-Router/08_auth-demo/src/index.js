import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // 要让store生效 套一个Provider标签   Provider注入后,所有组件就都能访问到store了
    // 和context很像,区别是: context可能会整很多个, 用redux的时候只需要调用一次
    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>

)