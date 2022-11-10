import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/"
    }),
    tagTypes: ['student'], //用来指定Api中的类型
    endpoints(build) {
        return {
            getStudents: build.query({
                query() {
                    return 'students'
                },
                // 用来转换响应数据
                transformResponse(baseQueryReturnValue) {
                    return baseQueryReturnValue.data
                },
                // providesTags:['student'] //打上标签
                providesTags: [{ type: 'student', id: 'LIST' }]
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
                keepUnusedDataFor: 60,   //60s
                providesTags: (result, error, id) => [{
                    type: 'student',
                    id
                }]
            }),
            delStudent: build.mutation({
                query(id) {
                    return {
                        // 如果发送的不是get请求，需要返回一个对象来设置请求的消息
                        url: `students/${id}`,
                        method: 'delete'
                    }
                },
            }),
            addStudent: build.mutation({
                query(stu) {
                    return {
                        url: 'students',
                        method: 'post',
                        body: {
                            data: stu  //RTKQ会自动转换为JSON，所以传个对象就可以
                        }
                    }
                },
                invalidatesTags: [{ type: 'student', id: 'LIST' }] //使标签失效  当我们调用addStudent的时候，会使上面带student标签的getStudents失效，会触发getStudents的自动执行，效果是自动刷新
            }),
            updateStudent: build.mutation({
                query(stu) {
                    return {
                        url: `students/${stu.id}`,
                        method: 'put',
                        body: {
                            data: stu.attributes
                        }
                    }
                },
                invalidatesTags: (result, error, stu) => [{
                    type: 'student',
                    id: stu.id
                }, {
                    type: 'student',
                    id: 'LIST'
                }]
            })
        }
    }
})

export const { useGetStudentsQuery, useGetStudentByIdQuery, useDelStudentMutation, useAddStudentMutation, useUpdateStudentMutation } = studentApi
export default studentApi