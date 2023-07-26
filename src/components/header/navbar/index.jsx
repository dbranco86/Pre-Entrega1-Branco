import React, { useState, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import CartComponent from "../cart-component/index";
import './styles.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${location.pathname === '/' && !isScrolled ? 'header-transparent' : 'header-colored'} ${isMenuOpen ? 'side-menu-open' : ''}`}>
            <input type="checkbox" className="side-menu" id="side-menu" checked={isMenuOpen} onChange={() => setIsMenuOpen(!isMenuOpen)} />
            <label className="hamb" htmlFor="side-menu">
                <span className="hamb-line"></span>
            </label>
            <div className="logo" onClick={handleMenuItemClick}>
                    <Link to="/">
                        <img className="image-logo" src="../../logo.png" alt=""/>
                    </Link>
            </div>           
            <nav className={`nav ${isMenuOpen ? 'menu-open' : ''}`}>
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
                    <li className="nav-item">
                        <Link to="/cart" onClick={handleMenuItemClick}><CartComponent /></Link>
                    </li>   
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;