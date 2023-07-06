import { useState } from 'react'
import Counter from "../../counter/index"
import './styles.css'


const Details = ({ id, image, name, category, description, price, stock, onAddToCart }) => {
    const [counter, setCounter] = useState(0);
    const isValidCounter = counter > 0;
    
    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
        if(!isValidCounter) return;
        setCounter((prevCounter) => prevCounter -1);
    };

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
                <p className='cardDetailStock'>{stock} left</p>
                <Counter isValidCounter={isValidCounter}  counter={counter} onDecrementCounter={decrementCounter} onIncrementCounter={incrementCounter} />  
                <div className='cardDetailActions'>
                    <button onClick={() => onAddToCart(id)} className='cardButton'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Details;