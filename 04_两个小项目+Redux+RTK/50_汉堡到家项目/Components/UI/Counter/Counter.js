import React,{useContext} from 'react';
import classes from './Counter.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from '../../../store/cart-context';
/*
*   引入FontAwesome
*       - 安装依赖
*           npm i --save @fortawesome/fontawesome-svg-core  svg支持，以svg形式引入图标字体的
            npm i --save @fortawesome/free-solid-svg-icons  solid和regular是两个具体的图标字体库
            npm i --save @fortawesome/free-regular-svg-icons
            npm i --save @fortawesome/react-fontawesome@latest  react的模块

            yarn add @fortawesome/react-fontawesome@latest @fortawesome/free-regular-svg-icons @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons

        - 引入组件
               import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
        - 引入图标
                import {faPlus} from "@fortawesome/free-solid-svg-icons";
        - 使用组件
                <FontAwesomeIcon icon={faPlus}/>
*
* */

// 计数器组件
const Counter = (props) => {

    // 获取CartContext
    const ctx = useContext(CartContext);

    // 添加购物车的函数
    const addButtonHandler = () => {
        ctx.addItem(props.meal)
    }

    // 删除购物车的函数
    const subButtonHandler = () => {
        ctx.removeItem(props.meal)
    }

    return (
        <div className={classes.Counter}>
            {/* 如果props里有amount且不为0，就显示减号和数字 */}
            {(props.meal.amount && props.meal.amount !== 0) ?
                // 因为JSX需要一个根标签，所以这里放一个fragment做根标签
                <>
                    <button className={classes.Sub} onClick={subButtonHandler}><FontAwesomeIcon icon={faMinus} /></button>
                    <span className={classes.count}>{props.meal.amount}</span>
                </>
                : null}
            <button className={classes.Add} onClick={addButtonHandler}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
}

export default Counter;
