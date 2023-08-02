import './styles.css'

const Total = ({onHandlerCheckout, total, isCart  }) => {

    return (  
        <div className='cartDetailActions'>
            <p className='cartTotal'>Total: USD {total}</p>
            {isCart ? <button onClick={onHandlerCheckout} className='cartButttonCheckout'>Checkout</button> : null}
        </div>
    )
}

export default Total;

