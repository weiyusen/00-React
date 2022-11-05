/**
 * Strapi 可以帮助我们快速搭建一个供我们使用的API服务器
 * 在server文件夹下
 */

import React, { useEffect, useState } from 'react';
import StudentList from "./components/StudentList";
import './App.css';


const App = () => {

    const [stuData, setStuData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    // 添加一个 state 来记录数据是否正在加载， false表示没有加载数据，true表示加载

    /*  需求：
    *   将写死的数据替换为从接口 http://localhost:1337/api/students  中加载的数据
    *
    *   组件初始化时需要向服务器发送请求来加载数据    只是这一次 所以用useEffect
    * */
    useEffect(() => {
        // 设置loading为true,表示正在加载
        setLoading(true)

        // 在effect中加载数据
        // fetch() 用来向服务器发送请求加载数据，是Ajax的升级版
        // 它需要两个参数：1.请求地址 2.请求信息  默认发的就是get请求
        fetch('http://localhost:1337/api/students',)
            .then((res) => {
                // response表示响应信息
                // console.log(res);
                // 先判断是否正常返回响应信息  因为即使是404也会走这个then   用ok
                // Response.ok  包含了一个布尔值，标示该 Response 成功（HTTP 状态码的范围在 200-299）
                if (res.ok) {
                    // 请求发送成功时调用
                    return res.json() // 该方法可以将响应的json直接转换为js对象 返回的是一个promise   只有fetch里能用的
                    /**
                * Response mixin 的 json() 方法接收一个 Response 流，并将其读取完成。
                * 它返回一个 Promise，Promise 的解析 resolve 结果是将文本体解析为 JSON。 */
                }

                // 代码运行到这里，说明没有成功加载到数据
                setLoading(false)
                // 抛出一个错误
                throw new Error('数据加载失败！')
            })
            .then((data) => {
                // 参数是上一个then里转换得到的js对象
                // console.log(data.data);
                // 将加载到的数据设置到state中
                setStuData(data.data)

                // 数据加载完毕设置loading为false
                setLoading(false)
            })
            .catch((e) => {
                // 用来同一处理错误
                // catch一执行，说明上述代码出错了
                setLoading(false)
                // 设置错误状态
                setError(e.message)
            })
    }, []);

    return (
        <div className="app">
            {/* 数据没在加载或没出错，就显示表格 */}
            {(!loading && !error) && <StudentList stus={stuData} />}
            {loading && <p>数据正在加载中。。。</p>}
            {/* 与运算：如果请求正常，那么error为null 则返回的是null,而null不会显示到页面上；如果error是个对象，返回的是第二个值即P标签 */}
            {error && <p>数据加载异常！</p>}
        </div>
    );
};

export default App;
