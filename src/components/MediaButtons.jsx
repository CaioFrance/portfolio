import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import Button from './Button';

import '../assets/css/MediaButtons.css';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <ul>
        <li>
          <Button href="https://github.com/CaioFrance" target="_blank">
            <FaGithub className="img-link" />
          </Button>
        </li>
        <li>
          <Button
            href="https://www.linkedin.com/in/caio-francelino-sena-santos/"
            target="_blank"
          >
            <FaLinkedin className="img-link" />
          </Button>
        </li>
        <li>
          <Button href="https://wa.me/55929922556313" target="_blank">
            <FaWhatsapp className="img-link" />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Buttons;
