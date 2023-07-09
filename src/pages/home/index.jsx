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
                        <ProductClass image="./src/assets/dresses.png" name="dresses" />
                    </Link>
                </div> 
                <div className='imagesCard'>
                    <Link to="/products">
                    <   ProductClass image="./src/assets/jeans.png" name="jeans" />
                    </Link>
                </div>  
                <div className='imagesCard'>
                    <Link to="/products">
                    <   ProductClass image="./src/assets/shirts.png" name="shirts" />
                    </Link>
                </div>  
                <div className='imagesCard'>
                    <Link to="/products">
                        <ProductClass image="./src/assets/skirts.png" name="skirts" />
                    </Link>
                </div> 
            </div>
        </div>
    )
}

export default Home