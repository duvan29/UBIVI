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
            <a href="#repisas">Productos</a>
          </li>
          <li>
            <a  href="#sobre">Sobre nosotros</a>
          </li>
          <li>
            <a  href="#fundadores">Fundadores</a>
          </li>
          <li>
            <a  href="#Contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
