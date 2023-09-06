import { useState } from 'react';
import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
const CardDescription = ({ title, description, backgroundImage }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {showDescription && <div className={styles.description}>{description}</div>}
      </div>
    </div>
  );
};

export default CardDescription;
