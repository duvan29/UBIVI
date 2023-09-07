import CardDescription from '../CardMision/mision';
import styles from './CardList.module.css'

const CardList = () => {
  return (
    <>
      <div id="sobre" className={styles.container2}/>
      <div className={styles.contenedor}>
      <div  className={styles.cardContainer}>
      <div>
        <CardDescription
          title="Misión"
          description="Promover un ambiente decorado y ordenado con nuestras repisas para que nuestros clientes se sientan tranquilos en el espacio donde se encuentran."
          backgroundImage='/10.jpg'
        />
      </div>
      <div>
        <CardDescription
          title="Visión"
          description="Ser reconocidos en el país ofreciendo repisas para el ambiente del hogar, ofreciendo buenos servicios y buena calidad para así llegar a ser una empresa económicamente estable."
          backgroundImage='/11.jpg'
        />
      </div>
      <div>
        <CardDescription
          title="Valores"
          description="Nuestra empresa se distingue por la creatividad en diseños exclusivos y personalizados. Promovemos el orden en la vida de las personas y su actitud a través del diseño. Respetamos el medio ambiente y trabajamos para mejorarlo. Mantenemos la disciplina en la producción artesanal de productos de alta calidad."
          backgroundImage='/12.jpg'
        />
      </div>
    </div>
    </div>
    
    </>
    
  );
};

export default CardList;
