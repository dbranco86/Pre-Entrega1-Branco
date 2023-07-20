import { useState } from 'react';
import Input from '../../components/main/search';
import './styles.css'

function Checkout () {
    const [active, error, hasError, setActive] = useState(false);

    const onChange = () => {}

    const onFocus = () => {
        setActive(true)
    }

    const onBlur = () => {
        setActive(false)
    }

    return (
        <div className='checkoutContainer'>
            <h1 className='checkoutTitle'>Checkout</h1>
            <form className='checkoutForm'>
                <div className='checkoutFormContainer'>
                    <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder='Pedrito'
                            id='name'
                            name='name'
                            required={true}
                            label='Name'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                            error={error}
                            hasError={hasError}
                            maxLength={40}
                        />
                    </div>
                    <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder='Perez'
                            id='surname'
                            name='surname'
                            required={true}
                            label='Apellido'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                            error={error}
                            hasError={hasError}
                            maxLength={40}
                        />
                    </div>
                    <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder='123456789'
                            id='document'
                            name='document'
                            required={true}
                            label='Documento de identidad'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                            error={error}
                            hasError={hasError}
                            maxLength={15}
                        />
                    </div>
                    <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder='ejemplo@dominio.com'
                            id='email'
                            name='email'
                            required={true}
                            label='Email'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                            error={error}
                            hasError={hasError}
                            maxLength={40}
                        />
                    </div>
                    <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder='+51 1233333'
                            id='phone'
                            name='phone'
                            required={true}
                            label='Telefono'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                            error={error}
                            hasError={hasError}
                            maxLength={15}
                        />
                    </div>
                    <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder='Av Siempre Viva 123, Springfield, USA'
                            id='addres'
                            name='addres'
                            required={true}
                            label='Dirección'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                            error={error}
                            hasError={hasError}
                            maxLength={80}
                        />
                    </div>
                    <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder='11123'
                            id='postalCode'
                            name='postalCode'
                            required={true}
                            label='Código postal'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                            error={error}
                            hasError={hasError}
                            maxLength={10}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout