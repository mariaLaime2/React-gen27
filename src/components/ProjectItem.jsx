import { GrGithub } from "react-icons/gr";

const ProjectItem = ({ img, url, title, urlG,tech }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#cc5993]">
      <img src={img} alt="" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-base font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <h4>
          {tech}
        </h4>
        <section className="flex flex-col gap-2">
          <a href={url} target="blanck">
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm">
              Mas info
            </p>
          </a>
          <a href={urlG} target="blanck">
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm flex gap-2 ">
              {" "}
              <GrGithub size={20} /> <span>ver codigo</span>
            </p>
          </a>
        </section>
        
      </div>
    </div>
  );
};

export default ProjectItem;
