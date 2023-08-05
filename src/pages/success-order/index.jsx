import { useLocation, Link } from 'react-router-dom';
import './styles.css'

const SuccessOrder = () => {
    const location = useLocation();

    const { orderId } = location.state || { orderId: null}
    return (
        <div className='successOrderContainer'>
            <div className='orderContainer'>
                <img className='imageOrder' src="../../../check.png" alt="check" />
                <h2>Gracias por su compra!</h2>
                <br />
                <p>Su orden: <span>{orderId}</span> ha sido éxitosa!</p> 
                <br />
                <p>Encontrará todos los detalles sobre su pedido a continuación, y le enviaremos un correo electrónico de confirmación de envío tan pronto como se envíe su pedido.</p>
            </div>
            <div className='backHomeContanier'>
                <p>Regresar al <Link to="/products">Inicio.</Link></p>
            </div>
        </div>
    )
}

export default SuccessOrder