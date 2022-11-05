import React, { useState, useCallback, useContext } from 'react';
import StuContext from '../store/StuContext';
import StudentForm from './StudentForm';

// 先解构stu，再把stu里面最深的解构出来
const Student = ({ stu, stu: { id, attributes: { name, age, gender, address } } }) => {
    // {stu:{id, attributes:{name, age, gender, address}}} = props  解构赋值 

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const ctx = useContext(StuContext);
    const delStu = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)
            // 删除学生
            // http://localhost:1337/api/students/id
            const res = await fetch(`http://localhost:1337/api/students/${id}`, {
                // fetch的第二个参数用来配置请求的详细信息
                method: 'delete'
            })
            // 判断是否成功
            // 上面await如果忘写了，那么res是一个promise,自然没有ok属性会报错
            if (!res.ok) {
                throw new Error('删除失败！')
            }
            // const data = await (await res).json() //被删除的学生
            // 修改成功后，需要重新触发列表的刷新
            // 刷新的方法（发请求的地方）在app.js里所以要么用props一层层传，要么用context，这里用context实现
            ctx.fetchData()
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    const deleteHandler = () => {
        delStu()
    }

    const cancelEdit = () => {
        setIsEdit(false)
    }

    return (
        <>
            {!isEdit &&
                <tr>
                    <td>{name}</td>
                    <td>{gender}</td>
                    <td>{age}</td>
                    <td>{address}</td>
                    <td>
                        <button onClick={deleteHandler}>删除</button>
                        {/* <button onClick={setIsEdit(true)}>修改</button> 这是错误写法，会自动执行setIsEdit(true)*/}
                        <button onClick={() => {setIsEdit(true)}}>修改</button>
                    </td>
                </tr>
            }
            {/* 是编辑状态，显示这个tr */}
            {isEdit && <StudentForm stu={stu} onCancel={cancelEdit}></StudentForm>}
            {loading && <tr><td colSpan={5}>正在删除数据。。。。</td></tr>}
            {error && <tr><td colSpan={5}>删除失败。。。。</td></tr>}
        </>

    );
};

export default Student;
