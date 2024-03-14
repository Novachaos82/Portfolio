import { FC } from "react";
import Project from "./Project";

interface ProjectsProps {}

import styles from "./project.module.css";

const Projects: FC<ProjectsProps> = () => {
  return (
    <div className=" bg-black">
      <div className=" mx-auto pb-[300px] lg:p-[8rem] md:p-[6rem] p-[4rem]">
        <div
          className={`text-white font-playfair font-bold text-5xl tracking-tighter pb-[4rem]`}
        >
          Projects
        </div>
        <div className={`grid grid-cols-2 gap-4 `}>
          <Project />
          <Project className="translate-y-[10%]" />

          <Project className={`translate-y-[10%] ${styles.gridCss}`} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
