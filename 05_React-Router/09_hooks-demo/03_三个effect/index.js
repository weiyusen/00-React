import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOM2 from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// React17的方式，这种方式是用17的React
// ReactDOM2.render(<App/>, document.getElementById("root"));


