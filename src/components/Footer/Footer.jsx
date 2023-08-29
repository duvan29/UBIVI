import style from './footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={style.logo}>
        <img src="/ruta-del-logo.png" alt="Logo de la empresa" />
      </div>
      <div className={style.socialMedia}>
        <a href="enlace-a-red-social-1" target="_blank" rel="noopener noreferrer">
          <img src="/icono-red-social-1.png" alt="Red social 1" />
        </a>
        <a href="enlace-a-red-social-2" target="_blank" rel="noopener noreferrer">
          <img src="/icono-red-social-2.png" alt="Red social 2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
