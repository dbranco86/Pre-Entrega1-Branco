import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../../components/header/navbar/index'
import Covers from '../../components/main/cover/index';
import ProductClass from '../../components/main/products/product-class/index';
import './styles.css'


function Home() {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (  
        <div className='main-container'>
            <Navbar /> 
            <div className='coversContainer'>
                <Covers /> 
            </div>
            <div className='imagesContainer'>
                <div className='imagesCard'> 
                    <Link to={`/products?category=Dresses`} onClick={() => setSelectedCategory('Dresses')}>
                        <ProductClass image="../dresses.png" name="dresses" category="Dresses"/>
                    </Link>
                </div> 
                <div className='imagesCard'>
                    <Link to={`/products?category=Jeans`} onClick={() => setSelectedCategory('Jeans')}>
                        <ProductClass image="../jeans.png" name="jeans" category="Jeans" />
                    </Link>
                </div>  
                <div className='imagesCard'>
                    <Link to={`/products?category=Shirts`} onClick={() => setSelectedCategory('Shirts')}>
                        <ProductClass image="../shirts.png" name="shirts" category="Shirts" />
                    </Link>
                </div>  
                <div className='imagesCard'>
                    <Link to={`/products?category=Skirts`} onClick={() => setSelectedCategory('Skirts')}>
                        <ProductClass image="../skirts.png" name="skirts" category="Skirts" />
                    </Link>
                </div> 
            </div>
        </div>
    )
}

export default Home;
