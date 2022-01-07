import personImg from '../assets/images/person.png';
import '../assets/css/Image.css';

const Image = () => {
  return (
    <>
      <div className="main-image">
        <img
          className="person-image"
          src={personImg}
          alt="Caio Francelino Sena Santos"
        />
      </div>
    </>
  );
};

export default Image;
