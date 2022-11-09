import { createSlice } from '@reduxjs/toolkit'
// 切片可以很多个
// 创建学校的slice
const schoolSlice = createSlice({
    name: 'school',
    initialState: {
        name: 'hgs',
        address: 'ggg'
    },
    reducers: {
        setName(state, action) {
            // 重名没关系,因为name不一样
            state.name = action.payload
        },
        setAddress(state, action) {
            state.address = action.payload
        }
    }
})

export const { setName, setAddress } = schoolSlice.actions
export const { reducer: schoolReducer } = schoolSlice