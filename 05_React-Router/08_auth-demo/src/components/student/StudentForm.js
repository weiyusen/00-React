import React, { useState, useEffect } from 'react'
import { useAddStudentMutation, useGetStudentByIdQuery, useUpdateStudentMutation } from '../../store/api/studentApi';
import './StudentForm.css';

export default function StudentForm(props) {
    /**
     * 有可能的问题：点击修改时，input框里的数据是旧的   数据库里的值可能是被别人修改了
     * 希望用户修改时，表单中的数据是数据库中最新的数据 
     * 所以Student里通过props传的不应该是数据stu， 改为传一个id，这里通过id去发请求获取数据,再设置到state里
     * 
     * 即studentForm一加载，应该去自动的加载最新的学生数据
     */
    // 调用钩子来加载数据
    /**RTKQ与我们之前用fetch手写发请求的区别：
     * RTKQ有缓存，可以减少请求发送的次数。第一次的数据是发请求得到的，第二次的数据是直接从缓存中取
     * 缓存是有时间限制，可以在api里配置keepUnusedDataFor来设置缓存时间
     * */
    const { data: stuData, isSuccess } = useGetStudentByIdQuery(props.stuId, {
        skip: !props.stuId
    })
    // console.log(stuData, isSuccess);
    useEffect(() => {
        if (isSuccess) {
            setInputData(stuData.attributes)
        }
    }, [isSuccess]); //只有isSuccess发生变化的时候才会执行这个回调函数

    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        gender: '男',
        address: ''
    })
    const nameChangeHandler = (e) => {
        setInputData(prevState => ({ ...prevState, name: e.target.value }))
    }
    const ageChangeHandler = (e) => {
        setInputData(prevState => ({ ...prevState, age: +e.target.value }))
    }
    const genderChangeHandler = (e) => {
        setInputData(prevState => ({ ...prevState, gender: e.target.value }))
    }
    const addressChangeHandler = (e) => {
        setInputData(prevState => ({ ...prevState, address: e.target.value }))
    }

    const [addStudent, { isSuccess: isAddSuccess }] = useAddStudentMutation()
    const [updateStudent, { isSuccess: isUpdateSuccess }] = useUpdateStudentMutation()
    const submitHandler = () => {
        addStudent(inputData)
        // 重置数据
        setInputData({
            name: '',
            age: '',
            gender: '男',
            address: ''
        })
    }

    const updateHandler = () => {
        updateStudent({
            id: props.stuId,
            attributes: inputData
        })
        props.onCancel()
    }
    return (
        <>
            <tr className="student-form">
                <td><input type="text" onChange={nameChangeHandler} value={inputData.name} /></td>
                <td><select name="" id="" onChange={genderChangeHandler} value={inputData.gender}>
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select></td>
                <td><input type="text" onChange={ageChangeHandler} value={inputData.age} /></td>
                <td><input type="text" onChange={addressChangeHandler} value={inputData.address} /></td>
                <td>
                    {props.stuId && <>
                        <button onClick={() => { props.onCancel() }}>取消</button>
                        <button onClick={updateHandler}>确认</button>
                    </>}
                    {!props.stuId && <button onClick={submitHandler}>添加</button>}
                </td>
            </tr>
            {/* {loading && <tr><td colSpan={5}>添加中。。。</td></tr>}
            {error && <tr><td colSpan={5}>添加失败。。。</td></tr>} */}
        </>

    )
}
