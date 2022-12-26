// 需要使用特定于 React 的入口点来导入 createAPI
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// 创建Api对象
// createApi用来创建RTKQ中的API对象
// RTKQ的所有 功能都需要通过该对象来进行
// createApi() 需要一个对象作为参数
const studentApi = createApi({
    // 作为Api的唯一标识,区分用的 和之前的name一个作用  如果不写的话,默认值是api
    reducerPath: 'studentApi', // Api的标识，不能和其他的Api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:/1337/api/"
    }), // 指定查询的基础信息，发送所请求使用的工具 fetchBaseQuery()是对fetch的封装
    // endpoints 用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值
    endpoints(build) {
        // build是请求的构建器，通过build来设置请求的相关信息
        return {
            // 前边是操作的名字,后边是操作的类别
            // 如果是查询的方法就是 build.query()
            // 如果是修改(删除\添加)就是 build.mutation()
            getStudents: build.query({
                // 配置这一次查询的信息
                query() {
                    // 用来指定请求子路径
                    // 这样 调用getStudents时,会像 baseUrl+这里返回值 拼一起的路径发请求
                    // 如果不传参，直接返回一个路径就行，如果要传参就是返回一个对象
                    return 'students'
                }
            }),
            // getStudentById:build.query(),
            // updateStudent: build.mutation()
        }
    }
})

/**
 * RTK Query 简称RTKQ  是RTK提供的一个连接服务器的工具(数据获取和缓存)
 * 作用是让state中的数据直接和数据库中的数据同步关联
 * 
 * web应用中加载数据时需要处理的问题:
 * 1、根据不同的加载状态显示不同的UI组件
 * 2、减少对相同数据重复发送请求
 * 3、使用乐观更新,提升用户体验(只有数据加载成功才更新,失败则显示旧的数据不变)
 * 4、在用户与UI交互时,管理缓存的生命周期(数据发生变化的时候自动加载)
 * 
 * RTKQ:可以直接通过RTKQ向服务器发送请求加载数据,并且RTKQ会自动对数据进行缓存,
 * 避免重复发送不必要的请求.其次,RTKQ在发送请求时会根据请求不同的状态返回不同的值,
 * 我们可以通过这些值来监视请求发送的过程并随时中止
 * 
 * RTKQ已经集成在了RTK中,不需要再引其它包
 * RTKQ中将一组相关功能统一封装到一个Api对象中   createApi() 自动生成钩子
 */

// 需要导出，看下面一节