import React, { useState, useContext } from 'react'
import './StudentForm.css';
import StuContext from '../store/StuContext';
import useFetch from '../hooks/useFetch';

export default function StudentForm(props) {
    const [inputData, setInputData] = useState({
        name: props.stu ? props.stu.attributes.name : '',
        age: props.stu ? props.stu.attributes.age : '',
        gender: props.stu ? props.stu.attributes.gender : '男',
        address: props.stu ? props.stu.attributes.address : ''
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

    const ctx = useContext(StuContext)
    const {loading, error, fetchData:updateStudent} = useFetch({
        url: props.stu ? `students/${props.stu.id}` : 'students',
        method:props.stu ?'put' : 'post',
        // body:inputData  这里就不传body了,调用的时候传 不然因为这个执行的早，数据都是空的
    }, ctx.fetchData)

    const submitHandler = () => {
        updateStudent(inputData)
    }

    const updateHandler = () => {
        updateStudent(inputData)
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
                    {props.stu && <>
                        <button onClick={() => {props.onCancel()}}>取消</button>
                        <button onClick={updateHandler}>确认</button>
                    </>}
                    {!props.stu && <button onClick={submitHandler}>添加</button>}
                </td>
            </tr>
            {loading && <tr><td colSpan={5}>添加中。。。</td></tr>}
            {error && <tr><td colSpan={5}>添加失败。。。</td></tr>}
        </>

    )
}
