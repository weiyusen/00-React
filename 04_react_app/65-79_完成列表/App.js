/**
 * Strapi 可以帮助我们快速搭建一个供我们使用的API服务器
 * 在server文件夹下
 */

import React, { useEffect, useState, useCallback } from 'react';
import StudentList from "./components/StudentList";
import './App.css';
import StuContext from './store/StuContext'


const App = () => {

    const [stuData, setStuData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    // 可以放到外面，然后套个useCallback避免重复创建
    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            setError(null) //重置，不能保存上一次的错误
            // 用await async改写
            const res = await fetch('http://localhost:1337/api/students')
            // 判断请求是否加载成功
            if (res.ok) {
                const data = await res.json()
                setStuData(data.data)
            } else {
                throw new Error('数据加载失败！') //因为这里是同步写法，所以用不了.catch, 只能用try catch
            }
        } catch (error) {
            setError(error)
        } finally {
            // try catch 里不管出没出错都要执行的代码放这里
            setLoading(false)
        }
    }, [])
    // useEffect must not return anything besides a function, which is used for clean-up
    // useEffect不能传异步函数，所以传一个普通函数，里面定义了异步函数（多定义了一层）
    useEffect(() => {
        fetchData()
    }, []);

    // 手动点按钮的刷新回调
    const loadDataHandler = () => {
        fetchData()
    }

    return (
        <StuContext.Provider value={{fetchData}}>
            <div className="app">
                {/* 点按钮可以手动刷新 */}
                <button onClick={loadDataHandler}>加载数据</button>
                {/* 数据没在加载或没出错，就显示表格 */}
                {(!loading && !error) && <StudentList stus={stuData} />}
                {loading && <p>数据正在加载中。。。</p>}
                {/* 与运算：如果请求正常，那么error为null 则返回的是null,而null不会显示到页面上；如果error是个对象，返回的是第二个值即P标签 */}
                {error && <p>数据加载异常！</p>}
            </div>
        </StuContext.Provider>

    );
};

export default App;
