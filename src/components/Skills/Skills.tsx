import { FC, useRef } from "react";
import { skillsData } from "../../lib/data";
import { motion, useInView } from "framer-motion";
import { container, textItem } from "../../utils/variants";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  const containerRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: true });

  return (
    <div className="bg-black text-white max-h-[500px] flex justify-center items-center px-4 pb-[12rem]">
      <motion.ul
        ref={containerRef}
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800  max-w-[1200px]"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        custom={0.0001}
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
