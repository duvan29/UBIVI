import styles from './Founder.module.css';

// eslint-disable-next-line react/prop-types
const Founder = ({ name, role, imageSrc }) => {
  return (
    <div className={styles.founder}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={name} className={styles.image} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.role}>{role}</div>
    </div>
  );
};

export default Founder;