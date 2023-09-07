import Founder from '../Founder/Founder';
import styles from './Founders.module.css'
// import founder1Image from './founder1.jpg'; // Importa las imágenes de los fundadores
// import founder2Image from './founder2.jpg';
// import founder3Image from './founder3.jpg';

const FoundersContainer = () => {
  return (
    <div>
    <div id="fundadores" className={styles.container2}/>
      <div >
    <h1>Fundadores</h1>
        <div className={styles.fundadoresContainer}>
        <Founder
            name="Natalia Sanchez"
            role="Contabilidad"
            imageSrc='/21.jpg'
        />
        <Founder
            name="Ingrid Monroy"
            role="Tecnologia"
            imageSrc='/22.jpg'
        />
        <Founder
            name="Michel Moreno"
            role="Diseño"
            imageSrc='/20.jpg'
        />
        </div>
    </div>
    </div>
    
    
  );
};

export default FoundersContainer;
