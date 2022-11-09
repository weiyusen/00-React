import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import studentApi from './studentApi'

const store = configureStore({
    reducer:{
        [studentApi.reducerPath]:studentApi.reducer
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(studentApi.middleware)
})

setupListeners(store.dispatch) //设置监听器,设置以后,RTKQ就可以支持refetchOnFocus和refetchOnReconnect两个属性
export default store