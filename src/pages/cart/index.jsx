
import { useContext } from 'react'
import './styles.css'
import { CartContext } from '../../components/context/cart-context'

function Cart () {
    const {cart, onAddToCart, onRemoveItem, onDecreaseItem, total} = useContext(CartContext)
    return (
        <div className='totalCartContainer'> 
            <div className='cartText'> 
                <h2>Carrito</h2>
            </div>
            <div className='cartContainer'>
                {cart.length === 0 && <h3>Carrito Vacio</h3>}
                {
                    cart?.length > 0 && cart.map((product) => (
                        <div key={product.id} className='cartItem'>
                            <div className='cardImageContainer'>
                                <img className='cardImage' src={product.image} alt={product.name} />
                            </div>
                            <div className='cartContentContainer'>
                                <p className='cartProductName'>{product.name}</p>
                                <p className='cartPrice'>USD {product.price}</p>
                                <p className='cartQuantity'>qty: {product.quantity}</p>
                                <p className='cartStock'>{product.stock} left</p>
                                <div className='cartActions'>
                                    <div className='buttonContanier'> 
                                        <button onClick={() => onAddToCart(product.id)} className='cartButttonAdd'>+</button>
                                        <button onClick={() => onDecreaseItem(product.id)} className='cartButttonDecrease'>-</button>
                                    </div>
                                    <div className='containerCartButtonRemove'>
                                        <button onClick={() => onRemoveItem(product.id)} className='cartButttonRemove'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    cart?.length > 0 && <p className='cartTotal'>Total: USD {total} </p>
                }
            </div>
        </div>
    )
}

export default Cart