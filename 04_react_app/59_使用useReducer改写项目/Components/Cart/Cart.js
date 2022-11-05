import React, { useContext,useEffect, useState } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout'

const Cart = () => {
    const ctx = useContext(CartContext)
    const [showDetails, setShowDetails] = useState(false)
    const [showCheckout, setCheckout] = useState(false)
    const a = 10
    useEffect(() => {
        console.log('effect执行了！');
        console.log(a); 
        if (ctx.totalAmount === 0) {
            setShowDetails(false)
            setCheckout(false)
        }
    }, [ctx, a, setShowDetails, setCheckout]);  
    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false)
            return;
        }
        setShowDetails(PrevState => !PrevState)
    }

    const showCheckoutHandler = () => {
        if (ctx.totalAmount === 0) return
        setCheckout(true)
    }

    const hideCheckout = () => {
        setCheckout(false)
    }

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={hideCheckout}></Checkout>}
            {showDetails && <CartDetails></CartDetails>}
            <div className={classes.Icon}>
                <img src={iconImg} />
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}

            </div>
            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
            <button className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`} onClick={showCheckoutHandler}>去结算</button>
        </div>
    );
}

export default Cart;
