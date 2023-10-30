import Founder from '../Founder/Founder';
import styles from './Founders.module.css'
// import founder1Image from './founder1.jpg'; // Importa las imágenes de los fundadores
// import founder2Image from './founder2.jpg';
// import founder3Image from './founder3.jpg';

const FoundersContainer = () => {
  return (
    <div>
    <div id="fundadores" className={styles.container2}/>
      <div >
    <h1>Fundadores</h1>
        <div className={styles.fundadoresContainer}>
        <Founder
            name="Natalia Sanchez"
            role="Contabilidad"
            imageSrc='/21.jpg'
        />
        <Founder
            name="Ingrid Monroy"
            role="Tecnologia"
            imageSrc='/22.jpg'
        />
        <Founder
            name="Michel Moreno"
            role="Diseño"
            imageSrc='/20.jpg'
        />
        </div>
        
    </div>
      <div className={styles.vismeContainer}>
          <div dangerouslySetInnerHTML={{
            __html: `
              <script src="//my.visme.co/visme-embed.js"></script>
              <iframe id="embedded-project-iframe" title="ubivi" src="//my.visme.co/_embed/pvjqdm6g-ubivi" style="border: 0; width: 95%; height: 100%; padding-bottom: 56.25%;" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen=""></iframe>
              <p style="width:223px !important; border-radius: 3px !important; padding: 3px !important; font-size: 12px !important; font-family: Arial, sans-serif !important; color: #314152 !important; white-space: nowrap !important">Made with <a href="https://www.visme.co/presentation-software?utm_source=CTA&amp;utm_medium=Embed" target="_blank" rel="noreferrer" style="font-weight: 600 !important; text-decoration: none !important; font-size: 12px !important; font-family: Arial, sans-serif !important; color: #314152 !important; white-space: nowrap !important">Visme Presentation Maker</a></p>
            `,
          }} />
      </div>
    </div>
    
    
  );
};

export default FoundersContainer;
