import { useState, useEffect, useCallback } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import styles from './Carucel.module.css'; // Import CSS module

const slides = [
  {
    url: '/4.jpg',
  },
  {
    url: '/5.jpg',
  },
  {
    url: '/51.jpg',
  },
  {
    url: '/WhatsApp Image 2023-09-06 at 19.28.29.jpg',
  },
];

const MainCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((cur) => (cur === 0 ? slides.length - 1 : cur - 1));
  };

  const next = useCallback(() => {
    setCurrent((cur) => (cur === slides.length - 1 ? 0 : cur + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [current, next]);

  return (
    <div className={styles.container}>
      <div
        className={styles.slide2}
      >
        <h1 className={styles.title}>Ambiente Positivo</h1>
        <p>Somos una empresa colombiana que nace en el año 2023, ubicada en Bogotá en la localidad quinta de Usme, conformada por Ingrid Monroy, Michael Moreno y Natalia Sánchez jóvenes emprendedores, cuya idea es ofrecer repisas para los espacios del hogar como lo son: alcobas y salas de estar; estas repisas cuentan con diseños novedosos, encaminados a la tendencia PA (psicología del ambiente) en la cual hablan acerca de cómo las personas se ven afectadas en su contexto frente al desorden del hogar, este producto busca generar el hábito de organización de ambientes del a través  de gustos particulares de los integrantes que conforman un hogar, donde buscamos resaltar la tranquilidad, paz y serenidad que se debe destacar</p>
        <button className={styles.contactosbutton}>Contactanos</button>
      </div>



      <div className={styles.carouselContainer}>
      <div className={styles.arrowContainer}>
        <div
            className={`${styles.prevButton} ${styles.arrowButton} ${styles.left}`}
            onClick={prev}
          >
            <BsFillArrowLeftCircleFill size={70} />
          </div>
          <div
            className={`${styles.nextButton} ${styles.arrowButton} ${styles.right}`}
            onClick={next}
          >
            <BsFillArrowRightCircleFill size={70} />
          </div>
      </div>
        <img
        src={slides[current].url} // Aquí, slides[current].url debe ser la ruta relativa adecuada
        alt="Descripción de la imagen"
        className={styles.slide}
        />
        <div className={styles.dotsContainer}>
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={current === index ? styles.activeDot : styles.dot}
            >
              <RxDotFilled size={30}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default MainCarousel;
