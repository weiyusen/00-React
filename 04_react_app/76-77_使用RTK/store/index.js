// 使用RTK来构建store
// createSlice 创建reducer的切片
// 它需要一个配置对象作为参数，通过对象的不同的属性来指定它的配置
import { configureStore } from '@reduxjs/toolkit'
import { stuReducer } from './stuSlice'
import { schoolReducer } from './schoolSlice'

// 通过切片创建store 配置对象的方式, 返回一个store对象
const store = configureStore({
    // reducer: stuSlice.reducer   //只有一个的时候可以这么写
    reducer: {
        student: stuReducer,   //有多个的时候这么用, 常用
        school: schoolReducer
    }
})

export default store