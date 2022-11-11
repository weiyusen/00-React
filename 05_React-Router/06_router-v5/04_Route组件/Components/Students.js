import React from 'react';
import {useRouteMatch, useHistory, useLocation, useParams} from 'react-router-dom'

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
    // const stu = STU_DATA.find(item => item.id === +props.match.params.id)

    /*
    除了可以通过props获取三个对象外，也可以通过钩子函数来获取
    */
const match = useRouteMatch()
const history = useHistory()
const location = useLocation()
const params = useParams()
const stu = STU_DATA.find(item => item.id === +params.id)
    return (
        <div>
            {stu.id}------{stu.name}
        </div>
    );
}

export default Students;
