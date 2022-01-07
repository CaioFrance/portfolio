import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';

import './assets/css/App.css';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Main />
      <About />
    </div>
  );
};

export default App;
