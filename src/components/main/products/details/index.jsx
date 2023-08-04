import { useState, useContext } from 'react'
import { CartContext } from '../../../context/cart-context';
import './styles.css'


const Details = ({ id, image, name, category, description, price, stock}) => {
    const { onAddToCart} = useContext(CartContext)
    
    return (
        <div className='cardDetail'>
            <div className='cardDetailImageContainer'>
                <img className='cardDetailImage' src={image} alt={name} />
            </div>
            <div className='cardDetailContent'>
                <h3 className='cardDetailName'>{name}</h3>
                <p className='cardDetailCategory'>{category}</p>
                <p className='cardDetailDescription'>{description}</p>
                <p className='cardDetailPrice'>USD {price}</p>
                <p className='cardDetailStock'>quedan {stock}</p>
                <div className='cardDetailActions'>
                <button onClick={() => onAddToCart(id)} className='cardButton' >Agregar al carrito</button>
            </div>
            </div>
        </div>
    )
}

export default Details;