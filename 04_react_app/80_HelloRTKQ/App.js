import React from 'react';
import { useGetStudentsQuery } from './store/studentApi';

const App = () => {
    // 调用API查询数据
    // 这个钩子函数它会返回一个对象作为返回值，请求过程中的相关数据都会在该对象中存储
    const {data, isSuccess, isLoading} = useGetStudentsQuery() //调用Api中的钩子查询数据
    return (
        <div>
            {/* useGetStudentsQuery是异步的，如果上面的data还没有回来，那么页面这里的data.data就会报错（undefined的属性读取） */}
            {/* 所以要加个判断,这个判断isSuccess就在返回的数据里 */}
            {/* 如果想有正在加载的提示，有isLoading */}
            {isLoading && <p>数据加载中</p>}
            {isSuccess && data.data.map(item => <p key={item.id}>
                {item.attributes.name}---
                {item.attributes.age}---
                {item.attributes.gender}---
                {item.attributes.address}
                </p>)}
        </div>
    );
};
// 优势是不需要trycatch 、 setLoading 、 setError 这一系列的东西了  内部都处理好了，想要什么就直接解构
/*
过程回顾：首先创建api对象，传入三个参数（reducerPath、baseQuery、endpoints)
         然后从api对象中解构出对应的钩子函数
         接着配置store，加中间件
         app中用provider把store注入进去
         调用钩子函数得到响应
*/
export default App;
