import {createSlice} from '@reduxjs/toolkit'
// 会自动给我们生成reducer和action
const stuSlice = createSlice({
    name: 'stu', // 用来自动生成action中的type,作为type的前缀  即case后面跟的常量
    initialState: {
        name:'zs',
        age:15,
        gender:'男',
        address:'hhh'
    },    //当前切片的state的初始值
    reducers:{// 指定state的各种操作，直接在对象中添加方法   注意加s
        setName(state, action){
            // 可以通过不同的方法来指定对state的不同操作
            // 两个参数：state 这个state的是一个代理对象，不是原来的state,可以直接修改 不用展开复制了
            // action, 你传的参数会放到action.payload里
            state.name = action.payload ? action.payload : 'lss'
        },
        setAge(state, action){
            state.age = action.payload ? action.payload : 28;
        }
    }
})
// 切片对象会自动的帮助我们生成action
console.log(stuSlice.actions);
// actions中存储的是slice自动生成action创建器（函数），调用函数后会自动创建action对象
// action对象的结构 {type:name/函数名, payload:函数的参数}
// 这样就不用手动写了，避免了type值写错的情况
// const nameAction = setName('hh')
// const ageAction = setAge('11')
// console.log(nameAction);  //{type: "stu/setName" ,payload:'hh'}

export const {setName, setAge} = stuSlice.actions
export const {reducer:stuReducer} = stuSlice