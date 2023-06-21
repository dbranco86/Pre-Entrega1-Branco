import './App.css'
import Navbar from './components/header/navbar'
import ItemListContainer from './components/header/itemlistcontainer'



function App() {

  return (
    <div className='container'>
      <Navbar />  
      <ItemListContainer text="¡Bienvenido a La Baca del Huerto!" />
    </div>
  )
}

export default App