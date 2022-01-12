import { useState } from 'react';

import InfoBar from './InfoBar';
import Project from './Project';

import '../assets/css/Projects.css';

import dashboard from '../assets/images/projects/dashboard.png';
import pokedex from '../assets/images/projects/pokedex.png';
// import todoApp from '../assets/images/projects/todo-app-ruby.png';
import fas from '../assets/images/projects/fas.png';

const projects = [
  <Project
    image={dashboard}
    model="pessoal"
    title="dashboard"
    description={`Dashboard de vendas construído com Java (Spring Boot) e 
    ReactJS na Semana Spring React da DevSuperior. Com esse projeto pude entender
    a construção de uma API REST feita com Spring Boot e o consumo dela com o
    React.`}
    link="https://dsvendas-cfbr.netlify.app/"
    srcCode="https://github.com/CaioFrance/projeto-sds4"
  />,
  <Project
    image={pokedex}
    model="pessoal"
    title="Pokedex"
    description={`Pokedex
  construída com VueJS utilizando a API do pokemon ('https://pokeapi.co/'). Com esse
  projeto pude entender um pouco o fluxo de trabalho com VueJS e como funciona
  o consumo de API.`}
    link="https://poke-vue.netlify.app"
    srcCode="https://github.com/CaioFrance/poke-vue"
  />,
  // <Project
  //   image={todoApp}
  //   model="pessoal"
  //   title="ToDo App"
  //   description={`ToDo Application foi construído com Ruby on Rails.
  //   Essa aplicação teve como objetivo entender como é rápido e prático construir
  //   uma aplicação com o framework Rails.`}
  //   link="https://todo-app-ruby-caio.herokuapp.com/"
  //   srcCode="https://github.com/CaioFrance/todo-app"
  // />,
  <Project
    image={fas}
    model="trabalho"
    title="Sistema de Gestão"
    description={`Sistema de Gestão da Fundação Amazônia Sustentável (FAS), 
    onde trabalho na criação de novas funcionalidades e refatoração de código.`}
  />,
];

const Projects = () => {
  const [allProjects, setAllProjects] = useState(projects);

  function handleFilterAllProjects() {
    setAllProjects(projects);
  }

  function handleFilterWorkProjects() {
    const newProjects = projects.filter((v) => {
      if (v.props.model === 'trabalho') {
        return v;
      }
      return '';
    });
    setAllProjects([...newProjects]);
  }

  function handleFilterPersonalProjects() {
    const newProjects = projects.filter((v) => {
      if (v.props.model === 'pessoal') {
        return v;
      }
      return '';
    });
    setAllProjects([...newProjects]);
  }

  function setFocusOnClick(e) {
    const currentAttribute = document.getElementById(e.target.id);
    const ul = document.querySelector('.projects-nav').children.item(0);

    for (let i = 0; i < ul.children.length; i++) {
      let li = ul.children.item(i);

      if (currentAttribute.getAttribute('id') === li.getAttribute('id')) {
        currentAttribute.setAttribute('class', 'focus');
      } else {
        li.removeAttribute('class');
      }
    }
  }

  return (
    <>
      <div id="projetos" className="projects-container">
        <InfoBar label="Projetos" />
        <div className="projects">
          <div className="projects-nav">
            <ul>
              <li
                onClick={(e) => {
                  setFocusOnClick(e);
                  handleFilterAllProjects();
                }}
                className="focus"
                id="todos"
              >
                Todos
              </li>
              <li
                onClick={(e) => {
                  setFocusOnClick(e);
                  handleFilterWorkProjects();
                }}
                id="trabalhados"
              >
                Trabalho
              </li>
              <li
                onClick={(e) => {
                  setFocusOnClick(e);
                  handleFilterPersonalProjects();
                }}
                id="pessoais"
              >
                Pessoal
              </li>
            </ul>
          </div>
          <div className="projects-list">
            {allProjects.map((project, index) => {
              return <div key={index}>{project}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
