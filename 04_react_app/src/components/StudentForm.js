import React, { useState, useEffect } from 'react'
import { useGetStudentByIdQuery } from '../store/studentApi';
import './StudentForm.css';

export default function StudentForm(props) {
    const {data:stuData, isSuccess} = useGetStudentByIdQuery(props.stuId)
    useEffect(() => {
        if(isSuccess){
        setInputData(stuData.attributes)
        }
    }, [isSuccess]); 

    const [inputData, setInputData] = useState({
        name: '',
        age:  '',
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

    const submitHandler = () => {
        
    }

    const updateHandler = () => {
        
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
                        <button onClick={() => {props.onCancel()}}>取消</button>
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
