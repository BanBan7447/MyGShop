import React, {createContext, useState, useContext} from 'react'

// Tạo context cho giỏ hàng
const CartContext = createContext();

const ContextCart = (props) => {
    const {children} = props;

    // Trạng thái giỏ hàng, lưu trữ các sản phẩm trong giỏ
    const [cart, setCart] = useState([]);

    // Trả về giá trị của context để chia sẻ dữ liệu cho các component con
    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {ContextCart, CartContext};