import './App.css'
import MainCarousel from './components/Carucel/carucel';
// import Nav from './components/Nav/Nav'
import Whatsapp from './components/icons/WhatsApp';
import Products from './components/products/products'
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {

  return (
    <>
      {/* <Nav/> */}
      <MainCarousel/>
      <Products/>
      <div>
        <Whatsapp/>
      </div>
    </>
  )
}

export default App
