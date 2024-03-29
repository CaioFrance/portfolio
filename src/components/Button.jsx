import '../assets/css/Button.css';

const Button = ({ id, href, children, target = '_parent' }) => {
  return (
    <div className="link-container">
      <a
        id={id}
        href={href}
        className="link"
        target={target}
        rel="noreferrer"
        style={{ width: '100%' }}
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
