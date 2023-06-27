import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/header/navbar/navbar'
import ItemListContainer from './components/header/itemlistcontainer/itemlistcontainer'
import Card from './components/main/card/card';



function App() {
  const [products, setProducts] = useState([]);
  
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
    <div className='container'>
      <Navbar />  
      <ItemListContainer text="¡Bienvenido a Moda Perucha!" />
      <div className='cardContainer'>
        {
          products.map((product) => (
            <Card {...product} />
          ))
        }
      </div>
    </div>
  )
}

export default App