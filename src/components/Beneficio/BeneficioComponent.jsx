
import BeneficioComponent from '../Beneficios/BeneficiosComponent';
import styles from './BeneficiosComponent.module.css';

const BeneficiosContainer = () => {
  const beneficiosData = [
    {
      logo: 'lorebern',
      title: 'Orden',
      description: 'Generar un espacio ordenado cuyo cliente se sienta cómodo con el ambiente.',
    },
    {
      logo: 'logo2.png',
      title: 'Salud',
      description: 'Buscar la mejora de la conducta humana a través del orden.',
    },
    {
      logo: 'logo3.png',
      title: 'Ambiente',
      description: 'Un ambiente tranquilo, ordenado con el cual el cliente se sienta una unión con él y el hogar.',
    },
    {
      logo: 'logo4.png',
      title: 'Bienestar',
      description: 'Forma distintiva de ser consciente de pensar, sentir y actuar.',
    },
  ];

  return (
      <div className={styles.beneficiosContainer}>
          <div className={styles.background}>
            {beneficiosData.map((beneficio, index) => (
              <BeneficioComponent
                key={index}
                imageSrc={beneficio.imageSrc}
                title={beneficio.title}
                description={beneficio.description}
              />
            ))}
          </div>
      </div>
  );
};

export default BeneficiosContainer;