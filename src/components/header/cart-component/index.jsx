import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import './styles.css';

const CartComponent = () => {
    const { cart } = useContext(CartContext);
    return (
        <button class="cart-btn">
                <img class="cart" src="../../carrito.png" alt=""/>
            <span id="num" class="num">{cart.length}</span>
        </button>
    )
}

export default CartComponent;