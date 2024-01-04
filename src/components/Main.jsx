import { GrGithub } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

//import CatF from "../assets/cat-frent.png";
//import CatL from "../assets/cat-cost.png";
import ast1 from "../assets/ast1.png";
import ast2 from "../assets/ast2.png";
import "./styles/Main.css";
import { useMediaQuery } from "@react-hook/media-query";

const Main = () => {
  const isMovile = useMediaQuery("(max-width:640px)");
  return (
    <div>
      {isMovile ? (
        <div
          id="main"
          className="w-full h-screen object-left bg-[#030014] flex "
        >
          <div className="absolute z-10"></div>
          <div className="relative flex flex-col h-full w-full">
            <video
              autoPlay
              muted
              loop
              className="rotate-180 absolute top-[-319px] left-0 z-[1] w-full h-full object-cover"
            >
              <source src="/blackhole.webm" type="video/webm" />
            </video>
          </div>
          {/*<img className="w-full h-screen object-left" src={background} alt="/" />*/}
          <div className="w-full h-screen absolute  top-0 left-0 z-10  ">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center  flex">
              <h1 className="sm:text-5xl text-4xl font-bold text-violet-100">
                {" "}
                Maria Soledad Laime
              </h1>
              <h2 className=" flex sm:text-1xl text-0xl pt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Fullstack",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Fullstack Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h2>

              <div className="flex justify-between pt-6 max-w-[200px] w-full ">
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
                <a href="https://wa.me/543884606839" target="blanck">
                  <BsWhatsapp
                    className="cursor-pointer text-white hover:text-violet-600"
                    size={35}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="main"
          className="  relative w-full h-screen object-left bg-[#030014] flex flex-col justify-center  "
        >
          <div className=" flex flex-col h-full w-full">
            <video
              autoPlay
              muted
              loop
              className="rotate-180 absolute top-[-319px] left-0 z-[1] w-full h-full object-cover"
            >
              <source src="/blackhole.webm" type="video/webm" />
            </video>
          </div>
          {/*<img className="w-full h-screen object-left" src={background} alt="/" />*/}
          <div className="   w-full h-screen  top-0 left-0 z-10 ">
            <div className=" absolute top-[-20px] right-[195px]  max-w-[900px] h-full w-full flex flex-col justify-center lg:items-start items-center flex">
              <h1 className="sm:text-5xl text-4xl font-bold text-violet-100">
                {" "}
                Maria Soledad Laime
              </h1>
              <h2 className=" flex sm:text-1xl text-0xl pt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "|",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Fullstack Deveoloper|",
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
                <a href="https://wa.me/543884606839" target="blanck">
                  <BsWhatsapp
                    className="cursor-pointer text-white hover:text-violet-600"
                    size={35}
                  />
                </a>
              </div>
              <article className="container-img absolute  left-70  mt-30  ">
                <img src={ast1} alt="" />
                <img src={ast2} alt="" />
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
