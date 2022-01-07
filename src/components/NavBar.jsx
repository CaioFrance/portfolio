import '../assets/css/NavBar.css';
import Button from './Button';

const NavBar = () => {
  return (
    <nav className="nav-bar-container">
      <ul className="navigation">
        <li>
          <h1 className="title">
            Ca<span style={{ color: 'var(--secondary-color)' }}>!</span>o
          </h1>
        </li>
        <li>
          <div className="options">
            <Button href="#about">Sobre</Button>
            <Button href="#tecnologias">Tecnologias</Button>
            <Button href="#projetos">Projetos</Button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
