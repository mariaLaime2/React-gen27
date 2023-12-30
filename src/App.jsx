import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Proyects from "./components/Proyects";
import Sidernav from "./components/Sidernav";
import Habilities from "./components/habilities";

function App() {
  return (
    
    <div className="div__container">
      <Sidernav />
      <Main />
      <AboutMe />
      <Habilities/>
      <Proyects />
      
      <Contact />
      <footer className="footer-app">
      <p> Maria soledad Laime ❤️ </p>
    </footer>
    </div>
  
  );
}

export default App;
