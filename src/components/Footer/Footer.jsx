
import { ContactUs } from '../From/Form';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.leftColumn}>
        <div className={style.contactInfo}>
          <h2>Contáctanos</h2>
          <p>¡Estamos aquí para ayudarte! Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.</p>
        </div>
        <div className={style.socialMedia}>
          <a href="enlace-a-red-social-1" target="_blank" rel="noopener noreferrer">
            <img src="/icono-red-social-1.png" alt="Red social 1" />
          </a>
          <a href="enlace-a-red-social-2" target="_blank" rel="noopener noreferrer">
            <img src="/icono-red-social-2.png" alt="Red social 2" />
          </a>
          <a href="enlace-a-red-social-3" target="_blank" rel="noopener noreferrer">
            <img src="/icono-red-social-3.png" alt="Red social 3" />
          </a>
        </div>
      </div>
      <div className={style.rightColumn}>
        <ContactUs />
      </div>
    </footer>
  );
};

export default Footer;