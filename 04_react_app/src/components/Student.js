import React from 'react';

const Student = ({stu:{name, age, gender, address}}) => {
    // {stu:{name, age, gender, address}} = props  解构赋值 即把props.stu.name 赋值给了name

    return (
            <tr>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>{address}</td>
            </tr>
    );
};

export default Student;
