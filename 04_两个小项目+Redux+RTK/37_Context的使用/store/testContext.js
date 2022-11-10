import React from 'react';
/*
*   Context相当于一个公共的存储空间，
*       我们可以将多个组件中都需要访问的数据统一存储到一个Context中，
*       这样无需通过props逐层传递，即可使组件访问到这些数据
*
*   通过React.createContext()创建context
*
* */
// 在组件A里面要当组件去用，所以变量名开头要大写
const TestContext = React.createContext({
    name:'zs',
    age:18
})
// 这里只是定义了Context, 这里不用写数据，真正写数据的地方是在组件（app)中用XXX.Provider 的value去写
// 因为如果在这里写数据，别的组件去用，且不使用xxx.Provider，那么数据不是响应式的

export default TestContext