import Button from './Button';

import '../assets/css/NavBar.css';

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
            <Button href="#projetos">Projetos</Button>
            <Button href="#about">Sobre</Button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
