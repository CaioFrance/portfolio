import MediaButtons from './MediaButtons';
import personImg from '../assets/images/person.png';

import '../assets/css/Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-description">
        <p className="description">
          <span className="text-detach">Caio Francelino</span>
          <br />
          <span>Desenvolvedor Web.</span>
        </p>
        <MediaButtons />
      </div>
      <div className="main-image">
        <img
          className="person-image"
          src={personImg}
          alt="Caio Francelino Sena Santos"
        />
      </div>
    </div>
  );
};

export default Main;
