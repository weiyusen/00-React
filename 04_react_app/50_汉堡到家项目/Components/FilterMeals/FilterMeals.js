import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from './FilterMeals.module.css';

const FilterMeals = (props) => {

    const [keyword, setKeyword] = useState('');

    // 通过Effect来改造练习  Effect的清理函数
    useEffect(()=>{

        // 降低数据过滤的次数，提高用户体验
        // 用户输入完了你在过滤，用户输入的过程中，不要过滤
        // 当用户停止输入动作1秒后，我们才做查询
        // 在开启一个定时器的同时，应该关掉上一次的定时器
        const timer = setTimeout(()=>{
            console.log('Effect触发了！');
            props.onFilter(keyword);
        }, 1000);

        // 在Effect的回调函数中，可以指定一个函数作为返回值
        // 这个函数可以称其为清理函数，它会在下次Effect执行前调用  
        // 可以在这个函数中，做一些工作来清除上次Effect执行所带来的的影响
        return () => {
            clearTimeout(timer);
        };

    }, [keyword]);

    const inputChangeHandler = e => {
        setKeyword(e.target.value.trim()) ;
        // props.onFilter(keyword);
    };

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                {/* 
                受控组件：状态由开发者维护    <Input value={x} onChange={fn}/>
                非受控组件：状态由组件自身维护（不受开发者控制）   <Input defaultValue={x} ref={input}/>
                在HTML的表单元素中，它们通常自己维护一套state，并随着用户的输入自己进行UI的更新，这种行为是不被我们程序所管控的。
                而如果将React里的state属性和表单元素的值建立依赖关系，再通过onChange事件与setState()结合更新state属性，
                就能达到控制用户输入过程中表单发生的操作。被React以这种方式控制取值的表单输入元素就叫做受控组件。
                推荐使用受控组件来处理表单数据
                */}
                <input
                    value={keyword}
                    onChange={inputChangeHandler}
                    className={classes.SearchInput}
                    type="text"
                    placeholder={"请输入关键字"}/>
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch}/>
            </div>
        </div>
    );
};

export default FilterMeals;
