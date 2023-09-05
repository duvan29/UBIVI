import { useState, useEffect, useCallback } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import styles from './Carucel.module.css'; // Import CSS module

const slides = [
    // AQUI LOS URL DE LAS IMAGENES PARA EL CARRUCEL //
  {
    url: 'https://www.megautos.com/wp-content/uploads/2021/01/autorepuestos-en-linea.jpg',
  },
  {
    url: 'https://www.comparaonline.cl/blog-statics/cl/uploads/2014/04/CC3B3mo_evitar_una_estafa_en_el_taller_mecC3A1nico__uuck6h.jpg',
  },
  {
    url: 'https://www.autoparteseltaca.com.ar/img/banner-02.jpg',
  },
  {
    url: 'https://www.rutamotor.com/wp-content/uploads/2022/02/Piezas-delicadas-del-vehiculo.jpg',
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
    <div>
      <div
        className={styles.slide2}
      >
        <h1 className={styles.title}>Texto que quieras poner en el carrucel</h1>
        <p>Voluptate laboris labore voluptate cupidatat eu aute amet qui est. Fugiat Lorem fugiat enim duis esse laboris ipsum ex qui elit mollit id mollit. Mollit labore eu eu ipsum labore aute duis. Incididunt cupidatat aliquip eu laborum qui non sit eiusmod reprehenderit Lorem ex cupidatat. Quis ipsum ullamco Lorem enim tempor consequat ad non. Officia labore elit excepteur enim cillum pariatur officia aliqua.</p>
        <button className={styles.contactosbutton}>Contactanos</button>
      </div>
      <div className={styles.carouselContainer}>
      <div
        style={{ backgroundImage: `url(${slides[current].url})` }}
        className={styles.slide}
      ></div>

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
