import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/header/navbar/index'
import ItemListContainer from './components/header/itemlistcontainer/index'
import Covers from './components/main/cover/index';
import Card from './components/main/products/card/index';
import Details from './components/main/products/details/index';



function App() {

  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [productDetail, setProductDetail] = useState(null);

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
      <div className='covers-container'>
        <Covers /> 
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
            products.map((product) => (
              <Card {...product} onShowDetails={onShowDetails}/>
            ))
          }
        </div>
        </>
        )
      }     
    </div>
  )
}

export default App