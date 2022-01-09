import { AiOutlineMenu } from 'react-icons/ai';
import { MdChromeReaderMode } from 'react-icons/md';
import { GrContact } from 'react-icons/gr';
import { ImUser } from 'react-icons/im';

import '../assets/css/NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar-container">
        <ul className="navigation">
          <li>
            <h1 className="title">
              Ca<span style={{ color: 'var(--secondary-color)' }}>!</span>o
            </h1>
          </li>
          <li>
            <div className="options">
              <a href="#sobre">Sobre</a>
              <a href="#projetos">Projetos</a>
              <a href="#contato">Contato</a>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="nav-bar-mobile">
        <ul className="navigation-mobile">
          <li>
            <h1 className="title">
              Ca<span style={{ color: 'var(--secondary-color)' }}>!</span>o
            </h1>
          </li>
          <li>
            <div className="menu-mobile">
              <AiOutlineMenu />
              <div className="options-mobile">
                <a href="/" className="menu">
                  Menu
                </a>
                <a href="#about" className="group-button">
                  <div className="button-description">
                    <span className="icon">
                      <ImUser size={22} />
                    </span>
                    <span>Sobre</span>
                  </div>
                </a>
                <a href="#projetos" className="group-button">
                  <div className="button-description">
                    <span className="icon">
                      <MdChromeReaderMode size={23} />
                    </span>
                    <span>Projetos</span>
                  </div>
                </a>
                <a href="#contato" className="group-button">
                  <div className="button-description">
                    <span className="icon">
                      <GrContact size={23} />
                    </span>
                    <span>Contato</span>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
