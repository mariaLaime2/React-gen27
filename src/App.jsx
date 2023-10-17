import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Proyects from "./components/Proyects";
import Sidernav from "./components/Sidernav";

function App() {
  return (
    
    <div className="div__container">
      <Sidernav />
      <Main />
      <AboutMe />
      <Proyects />
      <Contact />
      <footer className="footer-app">
      <p>© 2023 Maria soledad Laime. Todos los derechos reservados.</p>
    </footer>
    </div>
  
  );
}

export default App;
