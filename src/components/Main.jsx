import MediaButtons from './MediaButtons';

import personDesktop from '../assets/images/person.png';
import personMobile from '../assets/images/person-mobile.png';

import '../assets/css/Main.css';

const Main = () => {
  return (
    <>
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
            src={personDesktop}
            alt="Caio Francelino Sena Santos"
          />
        </div>
      </div>
      <div className="main-mobile">
        <div className="description-mobile">
          <div className="description-mobile-container">
            <p className="description">
              <span className="text-detach">Caio Francelino</span>
              <br />
              <span>Desenvolvedor Web.</span>
            </p>
            <MediaButtons />
          </div>
          <div className="image-mobile">
            <img
              className="person-mobile"
              src={personMobile}
              alt="Caio Francelino Sena Santos"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
