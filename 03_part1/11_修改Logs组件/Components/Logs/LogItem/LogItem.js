import React from 'react';
import MyDate from "./MyDate/MyDate";
import './LogItem.css'

const LogItem = (props) => {

    /*
    *   props是只读的不能修改
    * */
    // props.desc = '嘻嘻'; // 不能修改props中的属性 会报错
    // console.log(props.desc);


    return (
        <div className="item">
            <MyDate date={props.date}/>
            {/* 日志内容的容器 */}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}分钟</div>
            </div>
        </div>
    );
};


export default LogItem;
