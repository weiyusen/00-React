import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
// 处理用户权限的api
export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:1337/api/'
    }),
    endpoints(build){ //build是请求构建器
        return {
            // 添加一个注册的方法
            // 如果是修改(删除\添加)就是 build.mutation()
            register: build.mutation({
                query(user){
                    return {
                        url: 'auth/local/register',
                        method:'post',  
                        body:user //username password email
                    }
                }
            }),
            login: build.mutation({
                query(user){
                    return {
                        url: 'auth/local',
                        method:'post',  
                        body:user //identifier password
                    }
                }
            })
        }
    }
})
// 钩子暴露出去之后，就可以通过这个钩子去发请求了
export const {useRegisterMutation, useLoginMutation} = authApi