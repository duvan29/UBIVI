/* eslint-disable react/prop-types */
import styles from './BeneficiosComponent.module.css';

const BeneficioComponent = ({ logo, title, description }) => {
  return (
    <div className={styles.beneficio}>
      <div className={styles.iconText}>
        {logo}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BeneficioComponent;