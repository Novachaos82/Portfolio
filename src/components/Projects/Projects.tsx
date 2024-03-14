import { FC, useEffect, useRef, useState } from "react";
import Project from "./Project";
import styles from "./project.module.css";
import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";

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
    <div className=" bg-black pb-0">
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
          <Project />
          <Project
            className={
              windowSize[0] >= 780
                ? ` translate-y-[10%] ${styles.gridCss} `
                : ` ${styles.gridCss} `
            }
            translateValue={windowSize[0] >= 780 ? translateValue : "0px"}
          />

          <Project />

          <Project
            className={
              windowSize[0] >= 780
                ? ` translate-y-[10%] ${styles.gridCss} `
                : ` ${styles.gridCss} `
            }
            translateValue={windowSize[0] >= 780 ? translateValue : "0px"}
          />
          <Project
            className={
              windowSize[0] >= 780
                ? ` translate-y-[10%] ${styles.gridCss} `
                : ` ${styles.gridCss} `
            }
            translateValue={windowSize[0] >= 780 ? translateValue : "0px"}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
