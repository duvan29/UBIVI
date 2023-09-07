import './App.css'
import BeneficiosContainer from './components/Beneficio/BeneficioComponent';
import CardList from './components/CardCointainer/CardList';
import FoundersContainer from './components/FoundersContainer/FoundersContainer';
import Footer from './components/Footer/Footer';
import Whatsapp from './components/icons/WhatsApp';
import Products from './components/products/products'
import NavBar from './components/Nav/NavBar';
import MainCarousel from './components/Carucel/Carucel';

function App() {

  return (
    <>
      <NavBar/>
      <MainCarousel/>
      <BeneficiosContainer/>
      <Products/>
      <CardList />
      <FoundersContainer/>
      <div>
        <Whatsapp/>
      </div>
      <Footer/>
    </>
  )
}

export default App;
