import '../assets/css/InfoBar.css';

const InfoBar = ({ label }) => {
  return (
    <div className="info-container">
      <div className="info-text">{label}</div>
    </div>
  );
};

export default InfoBar;
