import { Route, Routes } from 'react-router-dom'
import { CartProvider } from './components/context/cart-context'
import Home from './pages/home'
import Navbar from './components/header/navbar/index'
import ProductList from './pages/products-list'
import ProductDetail from './pages/product-detail'
import Cart from './pages/cart'
import './App.css'





function App() {  
  return (  
    <div className='main-container'>
      <CartProvider>
        <Navbar />   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App