import './App.css'
// import AboutUsComponent from './components/AboutUs/about';
import BeneficiosContainer from './components/Beneficio/BeneficioComponent';
import CardList from './components/CardCointainer/CardList';
import MainCarousel from './components/Carucel/carucel';
import FoundersContainer from './components/FoundersContainer/FoundersContainer';
// import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav'
import Whatsapp from './components/icons/WhatsApp';
import Products from './components/products/products'
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {

  return (
    <>
      <Nav/>
      <MainCarousel/>
      <BeneficiosContainer/>
      <Products/>
      <CardList />
      <FoundersContainer/>
      <div>
        <Whatsapp/>
      </div>
      {/* <AboutUsComponent/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
