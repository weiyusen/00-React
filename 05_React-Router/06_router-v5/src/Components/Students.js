import React from 'react';

const STU_DATA = [
    {
        id: 1,
        name: 'lll'
    },
    {
        id: 2,
        name: 'ggg'
    },
    {
        id: 3,
        name: 'vvv'
    },
]
const Students = (props) => {
    // console.log(props.match.params); //{id: '1'}
    // 通过路由去传不同的参数，进而让组件根据不同的路由去显示不同的数据
    const stu = STU_DATA.find(item => item.id === +props.match.params.id)
    return (
        <div>
            {stu.id}------{stu.name}
        </div>
    );
}

export default Students;
