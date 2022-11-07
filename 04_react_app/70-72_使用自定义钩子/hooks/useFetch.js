/* 自定义钩子就是用来封装别的钩子
*   React中的钩子函数只能在函数组件或自定钩子中调用
*       当我们需要将React中钩子函数提取到一个公共区域时，就可以使用自定义钩子
*
*   自定义钩子其实就是一个普通函数，只是它的名字需要使用use开头
* */
import { useEffect, useState, useCallback } from 'react';
// reqObj用来存储请求的参数
/*
*   {
*       url 请求的地址
*       method 请求方法
*
*   }
*
* cb 回调函数，请求发送成功后执行
* */
export default function useFetch(reqObj, cb) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = useCallback(async (body) => {
        try {
            setLoading(true)
            setError(null)
            const res = await fetch('http://localhost:1337/api/'+reqObj.url, {
                method:reqObj.method || 'get' , //如果没传就用get
                headers:{
                    "Content-type":"application/json"
                },
                // get请求不能含有body，所以这里要判断一下，如果是get请求，body就为null
                // body: !reqObj.method || reqObj.method.toLowerCase() === 'get' ? null :JSON.stringify({data:reqObj.body})
                // body改为在参数里传  动态创建的数据应该要在调用的时候传
                body:body?JSON.stringify({data:body}):null,
            })
            if (res.ok) {
                const data = await res.json()
                setData(data.data)
                cb && cb() //如果传了回调函数就调用
            } else {
                throw new Error('数据加载失败！')
            }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    // 设置返回值
    return {
        loading,
        error,
        data,
        fetchData
    }
}