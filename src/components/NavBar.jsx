import '../assets/css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar-container">
      <ul className="navigation">
        <li>
          <h1 className="title">Ca!o</h1>
        </li>
        <li>
          <div className="options">
            <a href="">Projetos</a>
            <a href="">Tecnologias</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
