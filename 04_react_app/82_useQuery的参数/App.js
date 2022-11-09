import React from 'react';
import { useGetStudentsQuery } from './store/studentApi';
import StudentList from './components/StudentList'

const App = () => {
    const result = useGetStudentsQuery('666', {
        // useQuery可以接收一个对象作为第二个参数,通过该对象可以对请求进行配置
        // 在studentApi里做的是默认配置,在这里是只针对这里的请求做的配置
        selectFromResult: result => {
            //用来指定useQuery返回的结果,作用类似于响应拦截器
            // 与transformResponse的区别是:transformResponse只对数据进行处理,像isLoading这些是不处理的
            // 这里是对整个结果进行过滤,并且只对当前请求生效
            if (result.data) {
                // 过滤,保留年龄小于58的
                result.data = result.data.filter(item => item.attributes.age < 58)
            }
            return result
        },
        pollingInterval: 0, // 设置轮询(隔一段时间发一次请求)的间隔，单位毫秒 如果为0则表示不轮询 聊天室之类的用
        skip: false, // 设置是否跳过当前请求，默认false
        refetchOnMountOrArgChange: false, // 设置是否每次都重新加载数据 false正常使用缓存，true每次都重载数据(即不用缓存了)
        //refetchOnMountOrArgChange: 2, //数字，数据缓存的时间（秒）
        refetchOnFocus: true, // 是否在重新获取焦点时重载数据 需要在store里提供setupListeners支持 
        refetchOnReconnect: true, // 是否在重新连接后(网络断开后又重新连接)重载数据  需要在store里提供setupListeners支持
    })

    const { data: stus, isSuccess, isLoading, refetch } = result
    return (
        <div>
            <button onClick={() => refetch()}>刷新</button>
            {isLoading && <p>数据加载中</p>}
            {isSuccess && <StudentList stus={stus}></StudentList>}
        </div>
    );
};
export default App;
