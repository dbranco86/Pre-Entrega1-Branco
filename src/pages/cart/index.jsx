
import { useContext } from 'react'
import { CartContext } from '../../components/context/cart-context'
import { useNavigate, Link } from 'react-router-dom';
import { firebaseServices } from '../../services/firebase';
import CartItem from '../../components/main/cart/item';
import Total from '../../components/main/cart/total';
import './styles.css'




function Cart () {
    const navigate = useNavigate();
    const {cart, onAddToCart, onRemoveItem, onDecreaseItem, total} = useContext(CartContext);

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
                <div className='cartContainerTitle'>
                    <h2>Carrito de compras</h2>
                    {cart.length === 0 && <h3>Su carrito actualmente se encuentra vacio</h3> && <p><Link to="/products">Continúe explorando aquí.</Link></p>}                    
                </div>
                {
                    cart?.length > 0 && cart.map((product) => (
                        <CartItem key={product.id} {...product} onAddToCart={onAddToCart} onDecreaseItem={onDecreaseItem} onRemoveItem={onRemoveItem} />
                    ))
                }
                {
                    cart?.length > 0 && (
                        <Total isCart={true} onHandlerCheckout={onHandlerCheckout} total={total} />
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Cart