import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a to="/">Logo</a>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <a to="/servicios">Servicios</a>
          </li>
          <li>
            <a to="/sobre-nosotros">Sobre nosotros</a>
          </li>
          <li>
            <a to="/fundadores">Fundadores</a>
          </li>
          <li>
            <a to="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
