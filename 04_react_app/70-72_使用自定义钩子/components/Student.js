import React, { useState, useCallback, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import StuContext from '../store/StuContext';
import StudentForm from './StudentForm';

const Student = ({ stu, stu: { id, attributes: { name, age, gender, address } } }) => {
    const ctx = useContext(StuContext);
    const [isEdit, setIsEdit] = useState(false)
    const {loading, error, fetchData:delStu} = useFetch({
        url:`students/${id}`,
        method:'delete'
    }, ctx.fetchData)

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
                        <button onClick={() => {setIsEdit(true)}}>修改</button>
                    </td>
                </tr>
            }
            {isEdit && <StudentForm stu={stu} onCancel={cancelEdit}></StudentForm>}
            {loading && <tr><td colSpan={5}>正在删除数据。。。。</td></tr>}
            {error && <tr><td colSpan={5}>删除失败。。。。</td></tr>}
        </>

    );
};

export default Student;
