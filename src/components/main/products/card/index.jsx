import './styles.css'

const Card = ({ id, image, name, category, description, price, stock, onAddToCart, onShowDetails }) => {

    return (
        <div className='card' onClick={() => onShowDetails(id)}>
            <button className='cartButttonContainer' type='button'>
            <img className='cardImage' src={image} alt={name} />
            <div className='cardContent'>
                <h3 className='cardName'>{name}</h3>
                <p className='cardCategory'>{category}</p>
                <p className='cardDescription'>{description}</p>
                <p className='cardPrice'>USD {price}</p>
                <p className='cardStock'>{stock} left</p>
            </div>
            </button>
            <div className='cardActions'>
                <button onClick={(event) => {
                    event.stopPropagation(); 
                    onAddToCart(id);
                    }} className='cardButton'>Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Card;