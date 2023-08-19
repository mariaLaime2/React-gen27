import "./styles/AboutMe.css";
import html from "../assets/Htmld.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import PDFDownloadButton from "./PDFDownloadButton";
import pdfFile from "../assets/cvMs.pdf";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-15  aboutMe-container"
    >
      <section className="aboutMe__div">
        <h1 className="aboutMe__h1 pb-5">Sobre mi</h1>
        <p className="font-serif text-gray-700 text-lg">
          Hola, soy María Soledad Laime. Cuento con una sólida formación en
          tecnologías web modernas y un apasionado enfoque en la creación de
          experiencias de usuario satisfactorias. Estoy emocionada por el futuro
          de la tecnología y cómo puedo seguir contribuyendo a él. Siempre
          buscando oportunidades para aprender y crecer en un entorno
          colaborativo. <br />
          ¡Gracias por visitar mi portafolio!
        </p>
        <div className="text-center pt-5">
          <PDFDownloadButton pdfUrl={pdfFile} fileName="cvMaria.pdf" />
        </div>
      </section>
      <section className="aboutMe__skills">
        <h2 className="aboutMe__h2 pb-5">Habilidades</h2>
        <div className="aboutMe__skills__container">
          <div className="aboutMe__skills__img">
            <img src={html} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Html</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={css} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Css</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={js} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Javascript</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={react} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">React </h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={redux} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Redux</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={tailwind} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Tailwind</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
