import CardDescription from '../CardMision/mision';
import styles from './CardList.module.css'

const CardList = () => {
  return (
    <div id="sobre" className={styles.contenedor}>
      <div  className={styles.cardContainer}>
      <div>
        <CardDescription
          title="Misión"
          description="Promover un ambiente decorado y ordenado con nuestras repisas para que nuestros clientes se sientan tranquilos en el espacio donde se encuentran."
          backgroundImage='https://ebani.com.co/wp-content/uploads/2023/08/Repisa-Rectangular-Bella-Beige-L-Virtual-Muebles-RB40123.png'
        />
      </div>
      <div>
        <CardDescription
          title="Visión"
          description="Ser reconocidos en el país ofreciendo repisas para el ambiente del hogar, ofreciendo buenos servicios y buena calidad para así llegar a ser una empresa económicamente estable."
          backgroundImage='https://ebani.com.co/wp-content/uploads/2023/08/Repisa-Rectangular-Bella-Beige-L-Virtual-Muebles-RB40123.png'
        />
      </div>
      <div>
        <CardDescription
          title="Valores"
          description="Creatividad, Orden, Respeto, Disciplina"
          backgroundImage='https://ebani.com.co/wp-content/uploads/2023/08/Repisa-Rectangular-Bella-Beige-L-Virtual-Muebles-RB40123.png'
        />
      </div>
    </div>
    </div>
    
  );
};

export default CardList;
