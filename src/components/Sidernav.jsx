import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";

import { BsPerson, BsTools } from "react-icons/bs";

const Sidernav = () => {
  const [nav, setNav] = useState(false);
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-white"
        size={25}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 ">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-violet-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className=" pl-4 ">Inicio</span>
          </a>
          <a
            onClick={handleNav}
            href="#aboutMe"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-violet-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Acerca de mi</span>
          </a>
          <a
            onClick={handleNav}
            href="#habilities"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-violet-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Habilidades</span>
          </a>

          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-violet-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Proyectos</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-violet-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4"> Contacto</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div
          className="flex flex-col "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="#main"
            className=" rounded-full shadow-lg bg-gray-100 shadow-violet-400 m-2 p-4 inline-block text-violet-900 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            {hovered ? "Inicio" : <AiOutlineHome size={20} />}
          </a>
          <a
            href="#aboutMe"
            className="rounded-full shadow-lg bg-gray-100 shadow-violet-400 m-2 p-4 inline-block text-violet-900 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            {hovered ? "Acerca de mi" : <BsPerson size={20} />}
          </a>
          <a
            href="#habilities"
            className="rounded-full shadow-lg bg-gray-100 shadow-violet-400 m-2 p-4 inline-block text-violet-900 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            {hovered ? "Habilidades" : <BsTools size={20} />}
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-violet-400 m-2 p-4 inline-block text-violet-900 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            {hovered ? "Proyectos" : <AiOutlineProject size={20} />}
          </a>

          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-violet-400 m-2 p-4 inline-block text-violet-900 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            {hovered ? "Contacto" : <AiOutlineMail size={20} />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidernav;
