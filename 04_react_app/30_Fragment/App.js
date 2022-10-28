import React from 'react';

const App = () => {

    /*
    *   React.Fragment
    *       - 是一个专门用来作为父容器的组件
    *           它只会将它里边的子元素直接返回，不会创建任何多余的元素
    *       - 当我们希望有一个父容器
    *           但同时又不希望父容器在网页中产生多余的结构时
    *           就可以使用Fragment
    * */

    /**
     *  如果最外层是一个div，那么结果是 <div id='root'>里先套了一个div，再里面才是三个div
     * 解决方法1是：写一个Out组件，它返回自己的子元素，把Out放这里用作最外层的包裹，那么最终目录里是<div id='root'>里直接三个div
     * 方法2是React.Fragment  即 <React.Fragment></React.Fragment> 或者 <></> 语法糖  空标签开始，空标签结束表示一个Fragment
     */
    return (
        <>
           <div>第一个组件</div>
           <div>第二个组件</div>
           <div>第三个组件</div>
        </>
    );
};

export default App;
