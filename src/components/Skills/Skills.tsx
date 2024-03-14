import { FC, useRef } from "react";
import { skillsData } from "../../lib/data";
import { motion, useInView } from "framer-motion";
import { container, textItem } from "../../utils/variants";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  const containerRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: true });

  return (
    <div className="bg-black text-white max-h-[500px] flex flex-col justify-center items-center px-4 pb-[12rem] gap-10">
      <div className="text-white font-playfair font-bold text-4xl tracking-tighter">
        Skills
      </div>
      {/*<div className="p-20">
        <a
          className="group text-blue-500 transition-all duration-300 ease-in-out"
          href="#"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            This text gets underlined on hover from left
          </span>
        </a>
      </div>*/}

      <motion.ul
        ref={containerRef}
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800  max-w-[800px] font-fira"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        custom={0.1}
      >
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              className=" rounded-xl px-5 py-3 bg-white/10 text-white/80"
              key={index}
              variants={textItem}
            >
              {skill}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Skills;
