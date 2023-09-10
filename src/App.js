import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';
import Certifications from './components/Certifications';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Certifications />
      <Work/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
