import React from "react";

const CartContext = React.createContext({
    // 这里只是为了方便以后有个地方能查看
    item: [],
    totalAmount: 0,
    totalPrice: 0,
    addItem: () => { },
    removeItem: () => { },
    clearCart: () => { }
})

export default CartContext