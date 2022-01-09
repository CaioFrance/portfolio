import '../assets/css/Image.css';

const Image = ({ image, alt, title }) => {
  return (
    <div className="image-container">
      <img className="image" title={title} src={image} alt={alt} />
    </div>
  );
};

export default Image;
