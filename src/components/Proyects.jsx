import ProjectItem from "./ProjectItem";
import EcommerceReact from "../assets/Ecommerce-react.png";
import ecommercejs from "../assets/ecommercejs.png";
import rickAndMorty from "../assets/Rick.png";
import pokedex from "../assets/pokedex.png";
import "./styles/Projects.css";

const Proyects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 projects__container"
    >
      <h1 className="projects__title pb-5">Proyectos</h1>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={EcommerceReact}
          url="https://timely-fox-ed46b0.netlify.app/"
          title="Ecommerce"
          urlG="  https://github.com/mariaLaime2/React-gen27/tree/E-Commerce-react "
        />
        <ProjectItem
          img={pokedex}
          url="https://pokedex-msl.netlify.app/"
          title="Pokedex"
          urlG="https://github.com/mariaLaime2/React-gen27/tree/pokedex/public"
        />
        <ProjectItem
          img={rickAndMorty}
          url="https://rick-and-mortyc2d3da.netlify.app/"
          title="Rick And Morty"
          urlG="https://github.com/mariaLaime2/React-gen27/tree/Rick-And-Morty"
        />
        <ProjectItem
          img={ecommercejs}
          url="https://e-commerce-gen25-msl.netlify.app/"
          title="EcommerceJs"
          urlG=" https://github.com/mariaLaime2/carrito_generacion25"
        />
      </div>
    </div>
  );
};

export default Proyects;
