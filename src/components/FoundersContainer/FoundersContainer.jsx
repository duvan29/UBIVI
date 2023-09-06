import Founder from '../Founder/Founder';
import styles from './Founders.module.css'
// import founder1Image from './founder1.jpg'; // Importa las imágenes de los fundadores
// import founder2Image from './founder2.jpg';
// import founder3Image from './founder3.jpg';

const FoundersContainer = () => {
  return (
    <>
    <h1>Fundadores</h1>
        <div className={styles.fundadoresContainer}>
        <Founder
            name="Nombre del Fundador 1"
            role="Cargo del Fundador 1"
            imageSrc='https://ebani.com.co/wp-content/uploads/2023/08/Repisa-Rectangular-Bella-Beige-L-Virtual-Muebles-RB40123.png'
        />
        <Founder
            name="Nombre del Fundador 2"
            role="Cargo del Fundador 2"
            imageSrc='https://ebani.com.co/wp-content/uploads/2023/08/Repisa-Rectangular-Bella-Beige-L-Virtual-Muebles-RB40123.png'
        />
        <Founder
            name="Nombre del Fundador 3"
            role="Cargo del Fundador 3"
            imageSrc='https://ebani.com.co/wp-content/uploads/2023/08/Repisa-Rectangular-Bella-Beige-L-Virtual-Muebles-RB40123.png'
        />
        </div>
    </>
    
  );
};

export default FoundersContainer;
