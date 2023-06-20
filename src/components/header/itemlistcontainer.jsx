import React from "react";
import Cart from './cart';
import './styles.css';
const ItemListContainer = () => {
    return (
        <>
        <ul className="menu">
            <li><a href="#">Quienes somos</a></li>
            <li><a href="#">Nuestros Productos</a></li>
        </ul>
        <ul className="menu">
            <li><a href="#">Iniciar Sesión</a></li>
            <li class="nav-item">
            <Cart />
            </li>   
        </ul>
        </>
    )
}

export default ItemListContainer;