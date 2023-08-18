import { useState, useEffect, useCallback } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import styles from './Carucel.module.css'; // Import CSS module

const slides = [
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
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [current, next]);

  return (
    <div className={styles.carouselContainer}>
      <div
        style={{ backgroundImage: `url(${slides[current].url})` }}
        className={styles.slide}
      ></div>

      <div
        className={`${styles.prevButton} ${styles.arrowButton} ${styles.left}`}
        onClick={prev}
      >
        <BsChevronCompactLeft size={50} />
      </div>
      <div
        className={`${styles.nextButton} ${styles.arrowButton} ${styles.right}`}
        onClick={next}
      >
        <BsChevronCompactRight size={50} />
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
  );
};

export default MainCarousel;
