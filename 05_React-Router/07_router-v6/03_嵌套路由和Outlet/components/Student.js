import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const STU_DATA = [
    {
        id:1,
        name:'刘备'
    },
    {
        id:2,
        name:'关羽'
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

export default function Student() {

    const {id} = useParams()

    const location = useLocation();

    const nav = useNavigate();

    const stu = STU_DATA.find(item => item.id === +id)

    const clickHandler = () => {
        nav('/about', {
            replace:true   
        })
    }
  return (
    <div>
        <button onClick={clickHandler}>点我一下</button>
        <h2>{stu.id}----{stu.name}</h2>
    </div>
  )
}
