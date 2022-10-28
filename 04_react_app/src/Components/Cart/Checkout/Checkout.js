import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './Checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cart-context'
import CheckoutItem from './CheckoutItem/CheckoutItem'
import Bar from './Bar/Bar'

const checkoutRoot = document.getElementById('checkout-root')
//  React Hook "useContext" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function
// React Hook不能放在外面使用
// const ctx = useContext(CartContext)
const Checkout = (props) => {
    const ctx = useContext(CartContext)
    return ReactDOM.createPortal(<div className={classes.Checkout}>
        <div className={classes.Close}>
            <FontAwesomeIcon icon={faXmark} onClick={() => props.onHide()}></FontAwesomeIcon>
        </div>
        <div className={classes.MealsDesc}>
            <header className={classes.Header}>
                <h2 className={classes.Title}>餐品详情</h2>
            </header>
            <div className={classes.Meals}>
                {ctx.items.map(item => <CheckoutItem meal={item} key={item.id}></CheckoutItem>)}
            </div>
            <footer className={classes.Footer}>
                <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
            </footer>
        </div>
        <Bar totalPrice={ctx.totalPrice}></Bar>
    </div>, checkoutRoot)
}
export default Checkout