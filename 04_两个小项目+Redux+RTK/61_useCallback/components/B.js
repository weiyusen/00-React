import React from 'react';

const B = (props) => {
    console.log('B渲染');
    return (
        <div>
            <h2>组件B</h2>
            <p>{props.test && '哈哈'}</p>
        </div>
    );
}
export default React.memo(B);