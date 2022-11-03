import React, { useContext,useEffect, useState } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout'

const Cart = () => {
    // 勾出来
    const ctx = useContext(CartContext)
    // 添加一个state来设置详情是否显示
    const [showDetails, setShowDetails] = useState(false)
    // 添加一个state设置结账页的显示与隐藏
    const [showCheckout, setCheckout] = useState(false)

    // 解决CartDetails组件当我们手动把商品调为0后不消失的问题
    // 在组件每次重新渲染的时候，检查一下商品的总数量，如果数量为0，则修改showDetails为false
    // 组件每次重新渲染，组件的函数体就会执行
    // 但是如果像这样直接写，会报错 too many re-renders
    // 因为如果购物车里如果没有商品，下面判断会成立，就会执行setShowDetails，而它会触发组件的重新渲染，造成死循环
    // if(ctx.totalAmount === 0){
    //     // 购物车已经被清空
    //     setShowDetails(false)
    // }
    // 用Effect来解决=======================================================================================
    /**
     * 组件中是可以写逻辑的，但比如上面的会影响到组件的渲染，会产生“副作用”的不能直接写在函数体中
     * Effect就是专门处理这种的
     * 如果你的React使用了严格模式，也就是在React中使用了React.StrictMode标签
     * 那么React会非常“智能”的去检查你的组件中是否写有副作用的代码
     * React的严格模式，在处于开发模式下，会主动的重复调用一些函数，以使副作用显现。
     * 所以在处于开发模式且开启了React严格模式时，这些函数会被调用两次：
     * 类组件的的 constructor, render, 和 shouldComponentUpdate 方法
       类组件的静态方法 getDerivedStateFromProps
       函数组件的函数体
       参数为函数的setState
       参数为函数的useState, useMemo, or useReducer
     */
    useEffect(() => {
        if (ctx.totalAmount === 0) {
            // 购物车已经被清空
            setShowDetails(false)
        }
    });


    // 添加一个显示详情页的函数
    // console.log(111); //会打印两次

    const toggleDetailsHandler = () => {
        // 没有商品的时候不出来
        if (ctx.totalAmount === 0) {
            setShowDetails(false)
            return;
        }
        // setShowDetails(true)  这样是只能显示，没法关掉
        // 之前状态取反，就能实现切换
        setShowDetails(PrevState => !PrevState)
    }

    // 显示Checkout的回调
    const showCheckoutHandler = () => {
        // 灰的时候不能点
        if (ctx.totalAmount === 0) return
        setCheckout(true)
    }

    // 关闭Checkout的回调
    const hideCheckout = () => {
        setCheckout(false)
    }

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={hideCheckout}></Checkout>}
            {/* 引入购物车详情 */}
            {showDetails && <CartDetails></CartDetails>}
            <div className={classes.Icon}>
                {/* asset和public的区别：
                        public里的汉堡图片是会变的，产品不同，图片不同，最终是由服务器来决定用哪些图片，
                        而这些图片最终并不是放在我们目录下，最终通过CDN加载过来
                        
                        asset里放的是轻易不会变的内容，是服务器访问不到的，是我们的私有目录，所以不能直接写地址，要先引入*/}
                <img src={iconImg} />
                {/* 小红标，总数等于0不显示 */}
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}

            </div>
            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
            {/* 动态设置样式也是用判断 */}
            <button className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`} onClick={showCheckoutHandler}>去结算</button>
        </div>
    );
}

export default Cart;
