import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductClass from '../product-class/index';
import './styles.css'

const Categories = () => {

    const [selectedCategory, setSelectedCategory] = useState('');

    return (
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
    )
}

export default Categories;