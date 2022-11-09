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
                },
                // 用来转换响应数据
                transformResponse(baseQueryReturnValue) {
                    return baseQueryReturnValue.data
                }
            }),
            getStudentById: build.query({
                query(id) {
                    return `students/${id}`
                },
                transformResponse(baseQueryReturnValue) {
                    return baseQueryReturnValue.data
                },
                // 配置数据缓存的时间,单位是秒 从数据没被使用的时间开始计时   0表示不缓存  默认是60s
                // keepUnusedDataFor:0 
                keepUnusedDataFor:5   //5s
            })
        }
    }
})

export const { useGetStudentsQuery, useGetStudentByIdQuery } = studentApi
export default studentApi