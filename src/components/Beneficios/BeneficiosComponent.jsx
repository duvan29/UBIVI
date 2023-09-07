/* eslint-disable react/prop-types */
import styles from './BeneficiosComponent.module.css';

const BeneficioComponent = ({ logo, title, description }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.iconText}>
       <div className={styles.icon} > 
          {logo}
       </div>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description} id="repisas">{description}</p >
    </div>
  );
};

export default BeneficioComponent;