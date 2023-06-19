import React from "react"; 
import Cart from './cart';
import './styles.css';

const Header = () => {
    return (
        <header className="header">
            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor="side-menu">
                <span className="hamb-line"></span>
            </label>
            <div className="logo">
                <a href="#" className="logo">
                    <img className="image-logo" src="../src/images/logo.png" alt=""/>
                </a>
            </div>
            <nav className="nav">
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
            </nav>
        </header>
    )
}

export default Header;