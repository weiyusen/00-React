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

    // 可以使用useParams()来获取参数
    const {id} = useParams()

    const location = useLocation();// 获取当前的地址信息

    // v5的useRouteMatch没了
    // useMatch用来检查当前url是否匹配某个路由
    // 如果路径匹配，则返回一个对象，不匹配则返回null
    //const match = useMatch("/student/:id");

    // v5的useHistory没了,因为主要只用跳转的功能，所以v6改为了useNavigate
    // useNavigate获取一个用于条件页面的函数
    const nav = useNavigate();

    const stu = STU_DATA.find(item => item.id === +id)

    const clickHandler = () => {
        // nav('/about') //默认使用的是push方式，会产生历史记录
        nav('/about', {
            replace:true   //改为使用replace的方式去跳转，需要额外传个对象
        })
    }
  return (
    <div>
        <button onClick={clickHandler}>点我一下</button>
        <h2>{stu.id}----{stu.name}</h2>
    </div>
  )
}
