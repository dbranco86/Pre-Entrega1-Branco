import { CartProvider } from './components/context/cart-context'
import Navbar from './components/header/navbar/index'
import Router from './navigation'
import Footer from './components/footer'
import './App.css'






function App() {  
  return (  
    <div>
      <CartProvider>
        <Navbar />  
        <Router />
        <Footer />
      </CartProvider>
    </div>
  )
}

export default App