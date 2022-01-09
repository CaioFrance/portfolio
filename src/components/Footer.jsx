import {ImLocation, ImWhatsapp} from 'react-icons/im'

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
        (92) 99255-6313
      </address>
      <p className="footer-text">
        <span>Feito por Caio Francelino</span>
      </p>
    </footer>
  );
};

export default Footer;
