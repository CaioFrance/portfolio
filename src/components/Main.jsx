import '../assets/css/Main.css';
import MediaButtons from './MediaButtons';

import Image from './Image';

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-description">
        <p className="description">
          Olá! Me chamo <span className="text-detach">Caio</span>.
          <br />
          Bem-vindo ao meu portfólio.
        </p>
        <MediaButtons />
      </div>
      <Image />
    </div>
  );
};

export default Main;
