import { Route, Routes } from 'react-router-dom'
import Navbar from './components/header/navbar/index'
import Home from './pages/home'
import ProductDetail from './pages/product-detail'
import ProductList from './pages/products-list'
import './App.css'



function App() {  
  return (  
    <div className='main-container'>
      <Navbar />   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App