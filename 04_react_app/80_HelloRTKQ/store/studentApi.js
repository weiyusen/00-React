import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const studentApi = createApi({
    reducerPath: 'studentApi', 
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/"
    }), 
    endpoints(build) {
        return {
            getStudents: build.query({
                query() {
                    return 'students'
                }
            }),
        }
    }
})

// Api对象创建后，对象中会根据各种方法自动的生成对应的钩子函数
// 通过这些钩子函数，可以来向服务器发送请求
// 钩子函数的命名规则 getStudents --> useGetStudentsQuery   use开头，后面跟着你的名字，再跟着方法类型(Query或Mutation)
export const {useGetStudentsQuery} = studentApi
export default studentApi