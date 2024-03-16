import { FC, useEffect, useRef, useState } from "react";
import Project from "./Project";
import styles from "./project.module.css";
import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { projectsData } from "../../lib/data";

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  translateValue?: string | MotionValue<string>;
}

const Projects: FC<ProjectProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-0.5", "1"],
  });
  const projectsSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const translateValue = useTransform(
    projectsSpring,
    [0, 1],
    ["200px", "-450px"]
  );

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <section className=" bg-black pb-0" id="projects">
      <div className=" mx-auto  lg:p-[8rem] md:p-[6rem] p-[4rem]">
        <div
          className={`text-white font-playfair font-bold text-5xl tracking-tighter pb-[4rem]`}
        >
          Projects
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 `}
          ref={scrollRef}
        >
          <Project projectData={projectsData[0]} />
          <Project
            className={
              windowSize[0] >= 780
                ? ` translate-y-[10%] ${styles.gridCss}`
                : ` ${styles.gridCss} `
            }
            translateValue={windowSize[0] >= 780 ? translateValue : "0px"}
            projectData={projectsData[1]}
          />

          <Project projectData={projectsData[2]} />

          <Project
            className={
              windowSize[0] >= 780
                ? ` translate-y-[10%] ${styles.gridCss} `
                : ` ${styles.gridCss} `
            }
            translateValue={windowSize[0] >= 780 ? translateValue : "0px"}
            projectData={projectsData[3]}
          />
          <Project
            className={
              windowSize[0] >= 780
                ? ` translate-y-[10%] ${styles.gridCss} `
                : ` ${styles.gridCss} `
            }
            translateValue={windowSize[0] >= 780 ? translateValue : "0px"}
            projectData={projectsData[4]}
          />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
