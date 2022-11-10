import React from 'react';
import Student from "./Student";
import './StudentList.css';
import StudentForm from './StudentForm';


const StudentList = (props) => {
    console.log(props);
    return (
        <table>
            <caption>学生列表</caption>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>地址</th>
                    <th>操作</th>
                </tr>
            </thead>

            <tbody>

                {props.stus.map(stu => <Student key={stu.id} stu={stu} />)}

            </tbody>
            <tfoot>
                {/* StudentForm是多功能的,可以修改数据也可以添加数据 在添加的时候我们不需要发请求*/}
                <StudentForm></StudentForm>
            </tfoot>

        </table>
    );
};

export default StudentList;
