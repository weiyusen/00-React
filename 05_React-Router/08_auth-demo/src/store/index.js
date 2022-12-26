import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "./api/authApi";
import studentApi from "./api/studentApi";
import { authSlice } from "./reducer/authSlice";

const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        [studentApi.reducerPath]:studentApi.reducer,
        auth: authSlice.reducer
    },
    // 用concat把我们的中间件给它加进去
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware, studentApi.middleware)
})

setupListeners(store.dispatch) 
//设置监听器,设置以后,RTKQ就可以支持refetchOnFocus和refetchOnReconnect两个属性
/**
 * refetchOnFocus:  是否在重新获取焦点时重载数据
 * refetchOnReconnect: 是否在重新连接后(网络断开后又重新连接)重载数据
 */

export default store
// 需要让store在index中注册