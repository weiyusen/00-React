import React, { useContext,useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart-context';
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm';

export default function CartDetails() {
    const ctx = useContext(CartContext);

    // 设置state用于控制确认框的显示
    const [showConfirm, setShowConfirm] = useState(false)
    // 添加函数显示确认窗口
    const showConfirmHandler = () => {
        setShowConfirm(true)
    } 

    const cancelHandler = (e) => {
        e.stopPropagation()
        setShowConfirm(false)
    }

    const okHandler = () => {
        // 清空购物车
        ctx.clearCart()
    }

    return (
        <Backdrop>
            {showConfirm && <Confirm confirmText={'确认清空购物车吗？'} onCancel={cancelHandler} onOk={okHandler}></Confirm>}
            {/* 这里因为Cart里设置的点击事件会传播到这里，再冒泡到Cart触发点击事件，所以这里要停止冒泡 */}
            <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear} onClick={showConfirmHandler}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        <span>清空购物车</span>
                    </div>
                </header>
                <div className={classes.MealList}>
                    {
                        ctx.items.map(item => <Meal noDesc meal={item} key={item.id}></Meal>)
                    }
                </div>
            </div>
        </Backdrop>
    )
}
