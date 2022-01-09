import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './assets/css/App.css';

const App = () => {
  return (
    <div className="container">
      <ToastContainer />

      <NavBar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
