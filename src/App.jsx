import { CartProvider } from './components/context/cart-context'
import Navbar from './components/header/navbar/index'
import Router from './navigation'
import Footer from './components/footer'
import './App.css'






function App() {  
  return (  
      <CartProvider>
        <div className='allcontainer'>
          <div>
            <Navbar />  
            <Router />
          </div>
          <Footer />
        </div>
      </CartProvider>
  )
}

export default App