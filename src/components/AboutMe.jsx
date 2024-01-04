import "./styles/AboutMe.css";
import PDFDownloadButton from "./PDFDownloadButton";
import pdF from "../assets/cV-Msl-or.pdf";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16  aboutMe-container"
    >
      <section className="rounded-lg shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
            }}
            className="aboutMe__h1 pb-5"
          >
            Sobre mi
          </motion.h1>
          <p className="font-serif text-gray-100 text-lg text-white pt-10 pb-10 ">
            Hola, soy María Soledad Laime. Poseo una sólida formación en
            tecnologías de desarrollo web modernas. Estoy en busca de
            oportunidades para seguir aprendiendo y crecer en un entorno
            colaborativo participando en proyectos desafiantes para crear
            soluciones innovadoras que satisfagan las necesidades de los
            usuarios. Me entusiasma el futuro de la tecnología y estoy
            emocionada por continuar contribuyendo a él.
            <br />
            <br />
            ¡Agradezco tu visita a mi portafolio!
          </p>
          <div className="text-center pt-5 mt-10 ">
            <PDFDownloadButton pdfUrl={pdF} fileName="c-V-MariaLaime.pdf" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
