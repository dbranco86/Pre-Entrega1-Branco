
import { useContext } from 'react'
import { CartContext } from '../../components/context/cart-context'
import { useNavigate } from 'react-router-dom';
import { firebaseServices } from '../../services/firebase';
import './styles.css'


function Cart () {
    const navigate = useNavigate();
    const {cart, onAddToCart, onRemoveItem, onDecreaseItem, total, getTotalItemQuantity } = useContext(CartContext);

    const onHandlerCreateCart = async () => {
        const newCart = {
            buyer: {
                id: 1,
            },
            items: cart,
            createdAt: new Date(),
            total: total,
            status: 'pending',
        }

        const cartId = await firebaseServices.createCart(newCart)

        return cartId
    }

    const onHandlerCheckout = async () => {
        const cartId = await onHandlerCreateCart()
        navigate('/checkout', { state: { cartId: cartId.id } })
    }

    return (
        <>
        <div className='totalCartContainer'> 
            <div className='cartText'> 
                <h2>Carrito de compra</h2>
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
                    cart?.length > 0 && (
                        <div className='cartDetailActions'>
                            <p className='cartTotal'>Total: USD {total} </p>
                            <button onClick={onHandlerCheckout} className='cartButttonCheckout'>Checkout</button>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Cart