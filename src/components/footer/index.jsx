import './styles.css'

const Footer = () => {

    return (
        <div className='footerContainer'>
            <div className='footerSection'>
            <h6 className='titleFooter'>Atención al cliente</h6>
                <ul className='itemListfooter'>
                    <li>
                        <a href="./">Formas de pago</a>
                    </li>
                    <li>
                        <a href="./">Métodos de envío</a>
                    </li>
                    <li>
                        <a href="./">Cambio & Devoluciones</a>
                    </li>
                    <li>
                        <a href="./">Contáctanos</a>
                    </li>
                </ul>
            </div>
            <div className='footerSection'>
                <h6 className='titleFooter'>Nosotros</h6>
                <ul className='itemListfooter'>
                    <li>
                        <a href="./">Quienes somos</a>
                    </li>
                    <li>
                        <a href="./">Reviews de clientes</a>
                    </li>
                </ul>
            </div>
            <div className='footerSection'>
                <h6 className='titleFooter'>Redes Sociales</h6>
                <ul className='itemListfooter'>
                    <li>
                        <a href="./">Facebook</a>
                    </li>
                    <li>
                        <a href="./">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;