import React from 'react';
import { useGetStudentsQuery } from './store/studentApi';
import StudentList from './components/StudentList'

let num = 0

const App = () => {
    const result = useGetStudentsQuery(num) //传参的作用体现在data和currentData上
    /*
    currentData: undefined // 当前参数的最新数据 currentData存数据是会考虑参数的,当参数改变时,它只保存当前参数的最新数据
    data: undefined // 最新的数据  data存数据是不考虑传进来的参数的变化的
    isError: false // 布尔值，是否有错误
    error: Error() // 对象，有错时才存在
    isFetching: true // 布尔值，数据是否在加载   status为pending的时候为true, 为fullfiled的时候为false
    isLoading: true // 布尔值，数据是否第一次加载  通过refetch刷新的时候是false
    isSuccess: false // 布尔值，请求是否成功
    isUninitialized: false // 布尔值，请求是否还没有开始发送
    refetch: ƒ () // 一个函数，用来重新加载数据 唯一的一个函数
    status: "pending" // 字符串，请求的状态
* */
    console.log(result.data === result.currentData);
    /**
     * data会保留上次的数据,但是如果参数改变了,currentData是不会保留上次数据的(undefined)
     */
    const { data: stus, isSuccess, isLoading, refetch } = result
    return (
        <div>
            <button onClick={() => refetch()}>刷新</button>
            <button onClick={() => num++}>改变num</button>
            {isLoading && <p>数据加载中</p>}
            {isSuccess && <StudentList stus={stus}></StudentList>}
        </div>
    );
};
export default App;
