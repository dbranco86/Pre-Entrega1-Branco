import { Link } from 'react-router-dom';
import Navbar from '../../components/header/navbar/index'
import Covers from '../../components/main/cover/index';
import ProductClass from '../../components/main/products/product-class/index';
import './styles.css'


function Home() {

    return (  
        <div className='main-container'>
            <Navbar /> 
            <div className='coversContainer'>
                <Covers /> 
            </div>
            <div className='imagesContainer'>
                <div className='imagesCard'> 
                    <Link to="/products">
                        <ProductClass image="../dresses.png" name="dresses" />
                    </Link>
                </div> 
                <div className='imagesCard'>
                    <Link to="/products">
                        <ProductClass image="../jeans.png" name="jeans" />
                    </Link>
                </div>  
                <div className='imagesCard'>
                    <Link to="/products">
                        <ProductClass image="../shirts.png" name="shirts" />
                    </Link>
                </div>  
                <div className='imagesCard'>
                    <Link to="/products">
                        <ProductClass image="../skirts.png" name="skirts" />
                    </Link>
                </div> 
            </div>
        </div>
    )
}

export default Home