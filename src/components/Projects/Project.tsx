import { FC, HtmlHTMLAttributes, useRef } from "react";
import twitter from "../../assets/twitter.webp";
import { projectTags } from "../../lib/data";
import { cn } from "../../lib/utils";
import { container, imageVariants, textItem } from "../../utils/variants";
import { MotionValue, motion, useInView } from "framer-motion";

interface ProjectProps extends HtmlHTMLAttributes<HTMLDivElement> {
  translateValue?: string | MotionValue<string>;
}

const Project: FC<ProjectProps> = ({ className, translateValue }) => {
  const ref = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={cn("", className)}>
      <motion.div
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="text-white  font-fira  "
        style={{ translateY: translateValue }}
        initial="hidden"
      >
        <motion.img
          className="filter grayscale hover:filter-none duration-20 w-full"
          whileHover={{
            scale: 1.02,
          }}
          variants={imageVariants}
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
          src={twitter}
          alt=""
        />
        <motion.div className="my-4" variants={textItem}>
          <h3 className="text-xl font-semibold tracking-tighter">
            TWITTER CLONE
          </h3>
          <div className="text-white italic text-sm  font-playfair flex flex-wrap">
            {projectTags.map((tag, index) => {
              return (
                <span key={index} className="pr-2 ">
                  {tag}
                </span>
              );
            })}
          </div>
          <motion.p className="text-white/50 my-2" variants={textItem}>
            A Twitter clone built with React and Firebase. The users can edit
            their profile, follow and unfollow accounts, write and like tweets
            and visit other profiles. I made it possible for users to log in
            through Google or use the site as a guest to test the functionality.
          </motion.p>
          <motion.a
            variants={textItem}
            className="font-semibold tracking-wide italic text-2xl font-playfair underline"
            href="/"
          >
            View Project
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Project;
