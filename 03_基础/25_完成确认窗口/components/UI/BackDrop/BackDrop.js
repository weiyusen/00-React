import React from 'react';
import './BackDrop.css';
// 遮罩层
const BackDrop = (props) => {
    return (
        <div className="backDrop">
            {props.children}
        </div>
    );
};

export default BackDrop;
