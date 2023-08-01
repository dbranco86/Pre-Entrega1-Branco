import { useLocation } from 'react-router-dom';
import './styles.css'

const SuccessOrder = () => {
    const location = useLocation();

    const { orderId } = location.state || { orderId: null}
    return (
        <div className='ordenContainer'>
            <h2>Orden Exitosa!</h2>
            <p>Orden Id: {orderId}</p>
        </div>
    )
}

export default SuccessOrder