import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FC, useRef } from "react";
import { container, textItem } from "../utils/variants";
import { SiReadthedocs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const inView = useInView(scrollRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-2", "0"],
  });
  const springValue = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const leftValue = useTransform(springValue, [0, 1], ["110px", "0px"]);
  const rightValue = useTransform(springValue, [0, 1], ["-90px", "0px"]);

  return (
    <div
      className="font-fira flex flex-col md:flex-row md:justify-between items-center md:min-h-screen mt-20 md:mt-0"
      ref={scrollRef}
    >
      {/* about me section */}
      <motion.div
        className="bg-black text-white  flex flex-col lg:gap-10 p-[2rem] lg:p-[6rem] "
        variants={container}
        animate={inView ? "show" : "hidden"}
      >
        <motion.h1
          variants={textItem}
          style={{ x: leftValue }}
          className="font-bold font-playfair text-[24px] md:text-[48px]"
        >
          About Me
        </motion.h1>
        <motion.p
          variants={textItem}
          className=" max-w-fit lg:max-w-[500px] text-[16px] md:text-[20px]"
        >
          Hello, my name is Bhavesh Dewangan and I’m a front-end developer. I
          build responsive, accessible websites from scratch that look and feel
          fresh and creative. I’m committed to developing products that focus on
          usability and simplicity.
        </motion.p>
        <motion.p
          variants={textItem}
          className="max-w-fit lg:max-w-[500px] text-[16px] md:text-[20px]"
        >
          I love learning new things and technologies and I’m always gathering
          inspiration and exploring different ideas and techniques. I am looking
          for job opportunities.
        </motion.p>
      </motion.div>

      {/* contact me section */}
      <motion.div
        className="p-[2rem] lg:p-[10rem] text-white flex flex-col"
        variants={container}
      >
        <motion.h1
          variants={textItem}
          className="font-playfair text-[24px] md:text-[48px] font-bold self-end"
          style={{ x: rightValue }}
        >
          Contact Me
        </motion.h1>
        <motion.a
          variants={textItem}
          href="mailto:bhaveshdewangan0802@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[16px] md:text-[20px] italic font-fira border-b-[2px]  border-white hover:border-transparent duration-300"
        >
          bhaveshdewangan0802@gmail.com
        </motion.a>
        <ul className="flex text-decoration-none mt-5 gap-5 items-center justify-end">
          <motion.li variants={textItem} className="">
            <a
              href="https://drive.google.com/file/d/1qoHTnq0MyFjeEGVwM8bMy-USmAXntgEp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiReadthedocs size={30} />
            </a>
          </motion.li>
          <motion.li variants={textItem} className="">
            <a
              href="https://github.com/Novachaos82"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutMe;
