import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartComponent from "../cart-component/index";
import './styles.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goToCart = () => {
        navigate('/cart');
    }

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); 
    };


    return (
        <header className={`header ${location.pathname === '/' && !isScrolled ? 'header-transparent' : 'header-colored'} ${isMenuOpen ? 'side-menu-open' : ''}`}>
            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor="side-menu">
                <span className="hamb-line"></span>
            </label>
            <div className="logo">
                    <Link to="/">
                        <img className="image-logo" src="../../logo.png" alt=""/>
                    </Link>
            </div>           
            <nav className="nav">
                <ul className= "menu">
                    <li onClick={handleMenuItemClick}>
                    <Link to="/">Quienes somos</Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <Link to="/products">Nuestros Productos</Link>
                    </li>
                </ul>
                <ul className="menu">
                    <li onClick={handleMenuItemClick}>
                        <Link to="/">Iniciar Sesión</Link>
                    </li>
                    <li onClick={goToCart} class="nav-item">
                        <CartComponent />
                    </li>   
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;