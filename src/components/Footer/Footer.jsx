import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src="/ruta-del-logo.png" alt="Logo de la empresa" />
      </div>
      <div className="social-media">
        <a href="enlace-a-red-social-1" target="_blank" rel="noopener noreferrer">
          <img src="/icono-red-social-1.png" alt="Red social 1" />
        </a>
        <a href="enlace-a-red-social-2" target="_blank" rel="noopener noreferrer">
          <img src="/icono-red-social-2.png" alt="Red social 2" />
        </a>
        {/* Repite este bloque para cada red social */}
      </div>
    </footer>
  );
};

export default Footer;
