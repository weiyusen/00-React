import React, { useState, useCallback, useContext } from 'react'
import './StudentForm.css';
import StuContext from '../store/StuContext';

export default function StudentForm(props) {
    // 给个初始值，不给会警告 A component is changing an uncontrolled input to be controlled. 
    // This is likely caused by the value changing from undefined to a defined value, which should not happen. 
    // Decide between using a controlled or uncontrolled input element for the lifetime of the component. 
    const [inputData, setInputData] = useState({
        name: props.stu ? props.stu.attributes.name : '',
        age: props.stu ? props.stu.attributes.age : '',
        gender: props.stu ? props.stu.attributes.gender : '男',
        address: props.stu ? props.stu.attributes.address : ''
    })
    const nameChangeHandler = (e) => {
        // 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
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
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // 创建一个添加学生的方法
    const addStudent = useCallback(async (newStudent) => {
        try {
            setLoading(true)
            setError(null)
            // http://localhost:1337/api/students
            const res = await fetch(`http://localhost:1337/api/students`, {
                method: 'post',
                // 请求体 传的是json格式
                body: JSON.stringify({ data: newStudent }),
                // 请求头  告诉服务器数据是json格式的
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (!res.ok) {
                throw new Error('添加失败了')
            }
            // 添加成功，刷新列表
            ctx.fetchData()
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
        // 指定依赖项，当inputData变化时重新创建。 也可以不传依赖，把inputData作为参数传进去 这样好处是函数仍是只会创建一次，不会重复创建
    }, [])

    // 修改的方法
    const updateStudent = useCallback(async (id, newStu) => {
        try {
            setLoading(true)
            setError(null)
            const res = await fetch(`http://localhost:1337/api/students/${id}`, {
                method: 'put',
                body: JSON.stringify({ data: newStu }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (!res.ok) {
                throw new Error('修改失败了')
            }
            ctx.fetchData()
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    const submitHandler = () => {
        addStudent(inputData)
    }

    const updateHandler = () => {
        updateStudent(props.stu.id, inputData)
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
                    {/* props里有就显示编辑时应该显示的按钮 */}
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
