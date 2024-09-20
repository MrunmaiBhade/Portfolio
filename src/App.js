import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Project from './Project';
import About from './About'; // Add this line to import About
import Skill from './Skill';
import Footer from './Footer';

function App() {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
