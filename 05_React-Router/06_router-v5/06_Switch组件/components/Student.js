import React from 'react';
import {useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom";

const STU_DATA = [
    {
        id:1,
        name:'孙悟空'
    },
    {
        id:2,
        name:'猪八戒'
    },
    {
        id:3,
        name:'沙和尚'
    },
    {
        id:4,
        name:'唐僧'
    },
];

const Student = (props) => {
    const match = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const {id} = useParams();

    const stu = STU_DATA.find(item => item.id === +id);


    return (
        <div>
            {stu.id} --- {stu.name}
        </div>
    );
};

export default Student;
