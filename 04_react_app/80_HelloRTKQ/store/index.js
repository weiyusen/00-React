import { configureStore } from "@reduxjs/toolkit";
import studentApi from './studentApi'

const store = configureStore({
    reducer:{
        // 把Api对象配置到store的仓库里，名字就是api的reducerPath那个属性，值是api里的reducer
        [studentApi.reducerPath]:studentApi.reducer
    },
    // 中间件是store的扩展，作用是使缓存生效  getDefaultMiddleware能获取当前store的所有默认的中间件
    // 用concat把我们的中间件给它加进去
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(studentApi.middleware)
})
export default store