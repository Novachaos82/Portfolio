import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FC, useRef } from "react";
import { container, textItem } from "../utils/variants";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const inView = useInView(scrollRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-2", "-0.4"],
  });
  const springValue = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const leftValue = useTransform(springValue, [0, 1], ["110px", "0px"]);
  const rightValue = useTransform(springValue, [0, 1], ["0", "90px"]);

  return (
    <div className="font-fira flex justify-between items-center">
      {/* about me section */}
      <motion.div
        className="bg-black text-white  flex flex-col gap-10 p-[6rem] "
        ref={scrollRef}
        variants={container}
        animate={inView ? "show" : "hidden"}
      >
        <motion.h1
          variants={textItem}
          style={{ x: leftValue }}
          className="font-bold font-playfair text-[48px]"
        >
          About Me
        </motion.h1>
        <motion.p variants={textItem} className="max-w-[500px] text-md">
          Hello, my name is Bhavesh Dewangan and I’m a front-end developer. I
          build responsive, accessible websites from scratch that look and feel
          fresh and creative. I’m committed to developing products that focus on
          usability and simplicity.
        </motion.p>
        <motion.p variants={textItem} className="max-w-[500px] text-md">
          I love learning new things and technologies and I’m always gathering
          inspiration and exploring different ideas and techniques. I am looking
          for job opportunities.
        </motion.p>
      </motion.div>

      {/* contact me section */}
      <motion.div className="p-[10rem] text-white " variants={container}>
        <motion.h1
          variants={textItem}
          className="font-playfair text-[48px] font-bold"
          style={{ x: rightValue }}
        >
          Contact Me
        </motion.h1>
        <motion.a
          variants={textItem}
          href="mailto:bhaveshdewangan0802@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[20px] italic font-fira border-b-[2px]  border-white hover:border-transparent duration-300"
        >
          bhaveshdewangan0802@gmail.com
        </motion.a>
      </motion.div>
    </div>
  );
};

export default AboutMe;
