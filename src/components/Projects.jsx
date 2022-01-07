import '../assets/css/Projects.css';

const Projects = () => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="projetos">
      <h1>Projects</h1>
      <button onClick={handleScrollTop}>Entrar em contato</button>
    </div>
  );
};

export default Projects;
