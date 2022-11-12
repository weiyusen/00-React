import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // BrowserRouter和HashRouter在5和6是没有区别的
    <Router>
        <App/>
    </Router>
);

