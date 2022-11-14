import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "./api/authApi";

const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer
    },
    middleware:(getDefaultMiddleware().concat(authApi.middleware))
})

setupListeners(store.dispatch)

export default store