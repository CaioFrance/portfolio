import Image from './Image';

import '../assets/css/Tech.css';

const Tech = ({ image, name }) => {
  return (
    <div className="tech-container">
      <Image image={image} title={name} alt={name} />
      <span>{name}</span>
    </div>
  );
};

export default Tech;
