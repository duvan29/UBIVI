import style from './AboutUsComponent.module.css';

const AboutUsComponent = () => {
  return (
    <div className={style.bgGray}>
      <div className={style.container}>
        <div className={style.card}>
          <h1 className={style.title}>Sobre Nosotros</h1>
          <p>
            {/* Contenido del primer párrafo */}
          </p>
          <p className={style.paragraph}>
            {/* Contenido del segundo párrafo */}
            Esse tempor dolor nisi id consectetur voluptate non ipsum duis cillum sint. Dolore laborum exercitation ut do sit excepteur. Incididunt ad proident tempor quis proident nulla mollit aliqua labore. Labore aliqua id Lorem elit do quis nulla qui quis aliqua adipisicing commodo labore. Magna qui elit ad proident anim qui eiusmod minim ipsum et ea. Duis nisi dolore magna Lorem qui aute Lorem aliqua eu dolor proident.
          </p>
          <div className={style.foundersSection}>
            <h2 className={style.foundersTitle}>Fundadores</h2>
            <div className={style.founder}>
              <div className={style.founderName}>Juan Pérez</div>
              <div className={style.founderRole}>CEO</div>
            </div>
            <div className={style.founder}>
              <div className={style.founderName}>María García</div>
              <div className={style.founderRole}>COO</div>
            </div>
            {/* Agrega más fundadores aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;

