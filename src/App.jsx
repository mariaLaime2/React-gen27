import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Proyects from "./components/Proyects";
import Sidernav from "./components/Sidernav";

function App() {
  return (
    <div className="container">
      <Sidernav />
      <Main />
      <AboutMe />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
