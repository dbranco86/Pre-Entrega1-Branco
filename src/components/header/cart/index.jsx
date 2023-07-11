import React from "react";
import './styles.css';

const Cart = () => {
    return (
        <button class="cart-btn">
                <img class="cart" src="../../carrito.png" alt=""/>
            <span id="num" class="num">0</span>
        </button>
    )
}

export default Cart;