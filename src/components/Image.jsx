import '../assets/css/Image.css';

const Image = ({ image, alt, title }) => {
  return <img className="image" title={title} src={image} alt={alt} />;
};

export default Image;
