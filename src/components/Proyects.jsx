
import "./styles/Projects.css";
import { useMediaQuery } from "@react-hook/media-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "./constants";
import { GrGithub } from "react-icons/gr";
import ProjectItem from "./ProjectItem";
import EcommerceReact from "../assets/Ecommerce-react.png";
import ecommercejs from "../assets/ecommercejs.png";
import rickAndMorty from "../assets/Rick.png";
import pokedex from "../assets/CPOKEDEX.png";
import quiz from "../assets/quizzz.png"
import "./styles/Projects.css";
//text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500
const Proyects = () => {
  const isMovile= useMediaQuery("(max-width:740px)")
  return (
    <div>

    {
      isMovile?(
  
        <div
        id="projects"
        className=" m-auto md:pl-20 p-4 py-16 projects__container"
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
            img={quiz}
            url="https://sweet-fudge-e0ce39.netlify.app/"
            title="Quiz App"
            urlG="https://github.com/mariaLaime2/React-gen27/tree/Quiz-App"
          
          />
           <ProjectItem
            img={ecommercejs}
            url="https://e-commerce-gen25-msl.netlify.app/"
            title="EcommerceJs"
            urlG=" https://github.com/mariaLaime2/carrito_generacion25"
        
          />
        </div>
      </div>



        
        ):(
          
          
          
          <div
          id="projects"
          className="max-w-[1040px] w-full h-screen m-auto md:pl-20 p-4 py-15   projects__container flex flex-col gap-10"
          >
          <h1 className="projects__title  pt-9  ">Proyectos</h1>
          <div>
    
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            
            >
            {ServiceData.map((item) => (
              <SwiperSlide key={item.title} className="pb-10 " >
                <div className="relative rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#540b98] ">
                  <img
                    src={item.backgroundImage}
                    alt=""
                    className="rounded-xl  group-hover:opacity-10  "
                    />
                  <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="text-xl font-bold text-white tracking-wider text-center">
                      {item.title}
                    </h3>
                    <section className="flex flex-col gap-2">
                      <a href={item.urlWeb} target="blanck">
                        <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm">
                          Mas info
                        </p>
                      </a>
                      <a href={item.urlGitHub} target="blanck">
                        <p className="flex justify-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm flex gap-2 ">
                          {" "}
                          <GrGithub size={20} /> <span>ver codigo</span>
                        </p>
                      </a>
                    </section>
                  </div>
                  
                </div>
                
              </SwiperSlide>
            ))}
            </Swiper>
            </div>
        
          </div>
          
          
          
          )
    }
      
    
      
    
        </div>
  );
};

export default Proyects;
