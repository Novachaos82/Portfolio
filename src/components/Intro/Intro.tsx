import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import { container, delayedVariant, textItem } from "../../utils/variants";

interface IntroProps {}

const Intro: FC<IntroProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0.1", "1"],
  });

  const springValue = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const leftValue = useTransform(springValue, [0, 1], ["0px", "-100px"]);
  const rightValue = useTransform(springValue, [0, 1], ["0px", "100px"]);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center font-fira bg-black  text-white  uppercase text-lg md:text-2xl leading-relaxed md:leading-[1.25]  antialiased"
      ref={scrollRef}
    >
      {/* intro header */}
      <motion.div
        className="flex flex-col text-right"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          variants={textItem}
          className=" text-left"
          style={{ x: leftValue }}
        >
          I'm
        </motion.h2>
        <motion.h1
          variants={textItem}
          className="capitalize font-playfair font-bold tracking-[-1px]  md:tracking-[-4px] text-[2rem] md:text-[4rem] "
        >
          Bhavesh Dewangan
        </motion.h1>
        <motion.h2 variants={textItem} className="" style={{ x: rightValue }}>
          A Front-End Developer
        </motion.h2>
        <motion.div
          className="flex gap-4 text-[12px] md:text-[16px] max-w-[900px] font-[500] text-white   p-[2rem] leading-relaxed"
          variants={delayedVariant}
          custom={0.7}
          initial="hidden"
          animate="show"
        >
          <a
            target="_blank"
            href="https://github.com/Novachaos82"
            className=" border-b-[2px]  border-white hover:border-transparent duration-400"
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1kFJ2CVy-3cXyYi7Hmhqo18lFUB_l6GdA/view?usp=sharing"
            className=" border-b-[2px]  border-white hover:border-transparent duration-400"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
      {/* intro paragraph*/}

      <motion.p
        className="text-center text-[12px] md:text-[16px] max-w-[900px] font-[500] mt-[6rem]  p-[2rem] leading-relaxed"
        variants={delayedVariant}
        initial="hidden"
        animate="show"
      >
        A versatile and passionate Frontend Developer with a strong focus on
        crafting exceptional user experiences. You can check out my{" "}
        <a href="https://github.com/Novachaos82" className=" italic font-[400]">
          Github
        </a>
        . I'm always looking for new opportunities to learn and grow.
      </motion.p>
    </div>
  );
};

export default Intro;
