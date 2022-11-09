import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './store/index';
import { setName,setAge } from './store/stuSlice';
import { setName as setSchoolName , setAddress } from './store/schoolSlice';

const App = () => {

    // useSelector() 用来加载state中的数据
    // useSelector(state => state)  获取所有的state
    // const student = useSelector(state => state.student) //属性名和store里定义的是一一对应的
    // // 引入学校的state
    // const school = useSelector(state => state.school)

    // 可以一步到位解构赋值
    const {student, school} = useSelector(state => state)

    // 通过useDispatch()
    // 不用传参,会自动获取返回到派发器的对象
    // 只用引入一次
    const dispatch = useDispatch()

    // 获取action的构建器

    const nameChangeHandler = () => {
        // dispatch(setName('wys'))
        dispatch({type:'stu/setName', payload:'ggg'}) //也可以用之前的方式,一般不用
    }

    const ageChangeHandler = () => {
        dispatch(setAge())
    }
    const schoolNameChangeHandler = () => {
        dispatch(setSchoolName('jsdx'))
    }
    const schoolAddressChangeHandler = () => {
        dispatch(setAddress('ggggg'))
    }
    return (
        <div>
         <p>{student.name}---{student.age}---{student.gender}---{student.address}</p>
         <button onClick={nameChangeHandler}>修改name</button>
         <button onClick={ageChangeHandler}>修改age</button>
         <hr />
         <p>{school.name}---{school.address}</p>
         <button onClick={schoolNameChangeHandler}>修改学校名字</button>
         <button onClick={schoolAddressChangeHandler}>修改学校地址</button>
        </div>
    );
};

export default App;
