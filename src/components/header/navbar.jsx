import React from "react"; 
import './styles.css';
import ItemListContainer from "./itemlistcontainer";

const Navbar = () => {
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
                <ItemListContainer />
            </nav>
        </header>
    )
}

export default Navbar;