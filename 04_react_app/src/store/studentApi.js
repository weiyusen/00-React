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
                keepUnusedDataFor:5   
            })
        }
    }
})

export const { useGetStudentsQuery, useGetStudentByIdQuery } = studentApi
export default studentApi