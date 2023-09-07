import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import style from './WhatsApp.module.css'


function Whatsapp() {
    return (
        <div className={style.whatsappIconContainer}>
            <div className={style.contactDiv}>
                Contáctanos
            </div>
            <div className={style.pestaña}></div>
            <a href="https://api.whatsapp.com/send?phone=3123628582" className={style.whatsappIcon}>
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
      </div>
      );
    }

export default Whatsapp;