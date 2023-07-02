import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/header/navbar/index'
import ItemListContainer from './components/header/itemlistcontainer/index'
import Covers from './components/main/cover/index';
import Input from './components/main/search/index';
import Card from './components/main/products/card/index';
import Details from './components/main/products/details/index';
import ProductClass from './components/main/products/product-class/index';




function App() {

  const [search, setSearch] = useState('');
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [productFiltered, setProductFiltered] = useState([]);

  const filterBySearch = (query) => {
    let updateProductList = [...products];

    updateProductList = updateProductList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
    
    setProductFiltered(updateProductList);
  }

  const onChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    filterBySearch(value);
  }

  const onFocus = () => {
    setActive(true);
  }

  const onBlur = () => {
    setActive(false);
  }
  
  const onShowDetails = (id) => {
    setShowDetails(true);
    const findProduct = products.find((product) => product.id === id);
    setProductDetail(findProduct);
  }
  
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch('https://6499986179fbe9bcf83f91b6.mockapi.io/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, [])

  console.log({ products });
  return (
    
    <div className='main-container'>
      <Navbar /> 
      <div className='coversContainer'>
        <Covers /> 
      </div>
      <div className='imagesContainer'>
        <div className='imagesCard'>  
          <ProductClass image="./src/assets/dresses.png" name="dresses"/>
        </div> 
        <div className='imagesCard'>
          <ProductClass image="./src/assets/jeans.png" name="jeans"/>
        </div>  
        <div className='imagesCard'>
          <ProductClass image="./src/assets/shirts.png" name="shirts"/>
        </div>  
        <div className='imagesCard'>
          <ProductClass image="./src/assets/skirts.png" name="skirts"/>
        </div> 
      </div>
      <div className='inputContainer'>
        <Input 
          placeholder='busca un producto'
          id='task'
          required={true}
          name='Search'
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          active={active}
        />
      </div>  
      {showDetails ? (
          <>
            <div className='headerDetailContainer'>
              <button onClick={() => setShowDetails(false)} className='backButton'> &#8592; Regresar</button>
              <h2 className='headerTitleCard'>Detalle del Producto</h2>
            </div>
            <Details {...productDetail} />
          </>
        ) : (
          <>
            <ItemListContainer text="¡Bienvenido a Moda Perucha!" />
          <div className='cardContainer'>
          {
            search.length > 0 ? (
              productFiltered.map((product) => (
              <Card {...product} onShowDetails={onShowDetails} />
              ))
            ) : (
            products.map((product) => (
              <Card {...product} onShowDetails={onShowDetails}/>
            ))
            )
          }
        </div>
        </>
        )
      }       
    </div>
  )
}

export default App