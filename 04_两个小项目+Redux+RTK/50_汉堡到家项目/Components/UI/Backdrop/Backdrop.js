import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.css'

// h获取遮罩层的根
const backdropRoot = document.getElementById('backdrop-root')
const Backdrop = (props) => {
    // 传送
    return ReactDOM.createPortal(<div {...props} className={`${classes.Backdrop} ${props.className}`}>{props.children}</div>, backdropRoot)
}

export default Backdrop;
