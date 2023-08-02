import Covers from '../../components/main/cover/index';
import Categories from '../../components/main/products/categories/index';
import './styles.css'



function Home() {

    return (  
        <>
        <div className='main-container'>
            <div className='coversContainer'>
                <Covers /> 
            </div>
            <Categories />
        </div>
        </>
    )
}

export default Home;
