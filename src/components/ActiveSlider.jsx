import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "./constants";
import { GrGithub } from "react-icons/gr";
const ActiveSlider = () => {
  return (
    <div className="">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
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
          <SwiperSlide key={item.title}>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#cc5993]">
              <img
                src={item.backgroundImage}
                alt=""
                className="rounded-xl group-hover:opacity-10  "
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
  );
};
export default ActiveSlider;
