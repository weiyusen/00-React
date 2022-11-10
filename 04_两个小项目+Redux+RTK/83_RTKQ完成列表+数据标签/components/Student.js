import React, { useState } from 'react';
import { useDelStudentMutation } from '../store/studentApi';
import StudentForm from './StudentForm';

const Student = ({ stu, stu: { id, attributes: { name, age, gender, address } } }) => {
    const [isEdit, setIsEdit] = useState(false)

    // 获取删除的钩子,useDelStudentMutation的钩子返回的是一个数组   不是对象
    // 数组中有两个东西，第一个是操作的触发器，第二个是结果集
    // const [delStudent, result] = useDelStudentMutation()
    const [delStudent, {isSuccess}] = useDelStudentMutation()

    const deleteHandler = () => {
        delStudent(id)
    }

    const cancelEdit = () => {
        setIsEdit(false)
    }

    return (
        <>
            {(!isEdit && !isSuccess) &&
                <tr>
                    <td>{name}</td>
                    <td>{gender}</td>
                    <td>{age}</td>
                    <td>{address}</td>
                    <td>
                        <button onClick={deleteHandler}>删除</button>
                        <button onClick={() => { setIsEdit(true) }}>修改</button>
                    </td>
                </tr>
            }

            {
                isSuccess && <tr><td colSpan={5}>数据已删除</td></tr>
            }
            {isEdit && <StudentForm stuId={stu.id} onCancel={cancelEdit}></StudentForm>}
            {/* {loading && <tr><td colSpan={5}>正在删除数据。。。。</td></tr>}
            {error && <tr><td colSpan={5}>删除失败。。。。</td></tr>} */}
        </>

    );
};

export default Student;
