import React from 'react';
import Student from "./Student";
import './StudentList.css';

const StudentList = (props) => {
    return (
            <table>
                {/* 表格名称 */}
                <caption>学生列表</caption>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>地址</th>
                </tr>
                </thead>

                <tbody>

                {props.stus.map(stu => <Student key={stu.id} stu={stu.attributes}/> )}

                </tbody>


            </table>
    );
};

export default StudentList;
