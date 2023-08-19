import { GrGithub } from "react-icons/gr";
import background from "../assets/background.jpg";
import { TypeAnimation } from "react-type-animation";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Main = () => {
  return (
    <div id="main">
      <img className="w-full h-screen object-left" src={background} alt="" />
      <div className="w-full h-screen absolute top-0 left-0 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-violet-600">
            {" "}
            Maria Soledad Laime
          </h1>
          <h2 className=" flex sm:text-1xl text-0xl pt-4 text-pink-500">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Front-end",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-end Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/maria-laime-157b16280"
              target="blanck"
            >
              <BsLinkedin
                className="cursor-pointer text-white hover:text-violet-600"
                size={35}
              />
            </a>
            <a href="https://github.com/mariaLaime2" target="blanck">
              <GrGithub
                className="cursor-pointer text-white hover:text-violet-600"
                size={40}
              />
            </a>
            <a href="https://w.app/p7Q2Yq" target="blanck">
              <BsWhatsapp
                className="cursor-pointer text-white hover:text-violet-600"
                size={35}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
