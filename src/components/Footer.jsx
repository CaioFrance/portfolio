import {ImLocation, ImWhatsapp, e} from 'react-icons/im'
import {MdOutlineMail} from 'react-icons/md'

import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <address className="footer-address">
        <span style={{marginRight: '10px'}}>
          <ImLocation />
        </span>
        Manaus - AM, Rua D 11, 102 - CEP 69076-750 <br />
        <span style={{marginRight: '10px'}}>
          <ImWhatsapp />
        </span>
        (92) 99255-6313 <br />
        <span style={{marginRight: '10px'}}>
          <MdOutlineMail />
        </span>
        caio.francelinosena@gmail.com
      </address>
      <p className="footer-text">
        <span>Desenvolvido por{' '}
          <a href='https://www.linkedin.com/in/caio-francelino-sena-santos/'>
            Caio Francelino
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
