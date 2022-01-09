import Techs from './Techs';
import InfoBar from './InfoBar';

import '../assets/css/About.css';

const About = () => {
  return (
    <div id="sobre">
      <InfoBar label="Sobre mim" />
      <div className="technologies">
        <div className="greeting">
          <h2 className="text-greeting">
            Olá!
            <br /> Tudo Bem?
          </h2>
          <div className="description-greeting">
            <div className="wrap-greeting"></div>
            <p>
              Meu nome é{' '}
              <a
                href="https://www.linkedin.com/in/caio-francelino-sena-santos/"
                style={{
                  textDecoration: 'none',
                  color: 'var(--secondary-color)',
                }}
              >
                Caio Francelino
              </a>
              , sou Desenvolvedor Web e utilizo técnicas modernas de
              desenvolvimento, tais como Trabalho Colaborativo Remoto e
              Validação Semanais. Posso projetar e desenvolver o seu site com
              base nas suas necessidades e sugestões, e consultá-lo durante o
              desenvolvimento.
            </p>
            <p>Abaixo estão as tecnologias que eu utilizo no meu dia-a-dia.</p>
          </div>
          <div className="wrap-greeting"></div>
        </div>
        <div className="techs-greeting">
          <Techs />
        </div>
      </div>
      <div className="technologies-mobile">
        <div className="greeting-mobile">
          <h2 className="text-greeting-mobile">
            Olá!
            <br /> Tudo Bem?
          </h2>
          <div className="description-greeting-mobile">
            <div className="wrap-greeting-mobile"></div>
            <p>
              Meu nome é{' '}
              <a
                href="https://www.linkedin.com/in/caio-francelino-sena-santos/"
                style={{
                  textDecoration: 'none',
                  color: 'var(--secondary-color)',
                }}
              >
                Caio Francelino
              </a>
              , sou Desenvolvedor Web e utilizo técnicas modernas de
              desenvolvimento, tais como Trabalho Colaborativo Remoto e
              Validação Semanais. Posso projetar e desenvolver o seu site com
              base nas suas necessidades e sugestões, e consultá-lo durante todo
              o processo de desenvolvimento.
            </p>
            <p>Abaixo estão as tecnologias que eu utilizo no meu dia-a-dia.</p>
          </div>
          <div className="wrap-greeting-mobile"></div>
        </div>
        <div className="techs-greeting-mobile">
          <Techs />
        </div>
      </div>
    </div>
  );
};

export default About;
