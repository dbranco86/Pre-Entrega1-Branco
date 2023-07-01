import React from "react";
import './styles.css';

const ItemListContainer = ({ text }) => {
    return (
        <div className="container">
            <div className="title">
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default ItemListContainer;