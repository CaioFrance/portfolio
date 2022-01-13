import Tech from './Tech';

import '../assets/css/Techs.css';

import css3 from '../assets/images/css-3.png';
import html5 from '../assets/images/html.png';
import java from '../assets/images/java.png';
import js from '../assets/images/js.png';
import node from '../assets/images/node.svg';
import ruby from '../assets/images/ruby-logo.png';
import react from '../assets/images/react.svg';
import git from '../assets/images/git.svg';
import docker from '../assets/images/docker.png';
import mysql from '../assets/images/mysql.png';
import postgres from '../assets/images/postgre.png';
import figma from '../assets/images/figma.svg';
// import mongodb from '../assets/images/mongodb.png';
import spring from '../assets/images/spring.png';

const Techs = () => {
  return (
    <>
      <div className="images">
        <h2 className="images-text">Tecnologias:</h2>
        <div className="image-group">
          <div className="stack">
            <Tech image={html5} name="HTML5" />
          </div>
          <div className="stack">
            <Tech image={css3} name="CSS3" />
          </div>
          <div className="stack">
            <Tech image={js} name="JavaScript" />
          </div>
        </div>

        <div className="image-group">
          <div className="stack">
            <Tech image={node} name="NodeJS" />
          </div>
          <div className="stack">
            <Tech image={java} name="Java" />
          </div>
          <div className="stack">
            <Tech image={postgres} name="PostgreSQL" />
          </div>
        </div>

        <div className="image-group">
          <div className="stack">
            <Tech image={mysql} name="Mysql" />
          </div>
          <div className="stack">
            <Tech image={docker} name="Docker" />
          </div>
          <div className="stack">
            <Tech image={git} name="Git" />
          </div>
        </div>

        <h2 className="images-text">Estudando:</h2>
        <div className="image-group">
          <div className="stack">
            <Tech image={react} name="ReactJS" />
          </div>
          <div className="stack">
            <Tech image={figma} name="Figma" />
          </div>
          <div className="stack">
            <Tech image={spring} name="spring" />
          </div>
        </div>

        <h2 className="images-text">Outras tecnologias:</h2>
        <div className="image-group">
          <div className="stack">
            <Tech image={ruby} name="Ruby" />
          </div>
        </div>
      </div>
      <div className="images-mobile">
        <h2 className="images-text-mobile">Tecnologias:</h2>

        <div className="image-group-mobile">
          <div className="stack-mobile">
            <Tech image={html5} name="HTML5" />
          </div>
          <div className="stack-mobile">
            <Tech image={css3} name="CSS3" />
          </div>
          <div className="stack-mobile">
            <Tech image={js} name="JavaScript" />
          </div>
          <div className="stack-mobile">
            <Tech image={node} name="NodeJS" />
          </div>
          <div className="stack-mobile">
            <Tech image={java} name="Java" />
          </div>
          <div className="stack-mobile">
            <Tech image={postgres} name="PostgreSQL" />
          </div>
          <div className="stack-mobile">
            <Tech image={mysql} name="Mysql" />
          </div>
          <div className="stack-mobile">
            <Tech image={docker} name="Docker" />
          </div>
          <div className="stack-mobile">
            <Tech image={git} name="Git" />
          </div>
        </div>

        <h2 className="images-text-mobile">Estudando:</h2>
        <div className="image-group-mobile">
          <div className="stack-mobile">
            <Tech image={react} name="ReactJS" />
          </div>
          <div className="stack-mobile">
            <Tech image={figma} name="Figma" />
          </div>
          <div className="stack-mobile">
            <Tech image={spring} name="spring" />
          </div>
        </div>

        <h2 className="images-text-mobile">Outras tecnologias:</h2>
        <div className="image-group-mobile">
          <div className="stack-mobile">
            <Tech image={ruby} name="Ruby" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Techs;
