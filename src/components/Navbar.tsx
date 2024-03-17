import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FC, useState } from "react";
import { navScrollVariants } from "../utils/variants";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous) {
      if (latest > previous && latest > 300) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    } else {
      setHidden(false);
    }
  });

  const NavLink = ({ scroll, title }: { scroll: number; title: string }) => {
    const scrollTop = () => window.scrollTo({ top: scroll });

    return (
      <li
        className="relative inline-block group cursor-pointer"
        onClick={scrollTop}
      >
        <span className="text-white hover:text-white transition-colors duration-300">
          {title}
        </span>

        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white opacity-100 scale-0 origin-center group-hover:scale-100 transition-all duration-400 ease-in-out"></span>
      </li>
    );
  };

  return (
    <motion.div
      className=" fixed top-0 w-full z-50 bg-transparent text-white flex gap-4 md:gap-0 flex-col md:flex-row items-center md:justify-between  py-2 md:py-0 px-10   md:h-[90px]  border-b-white border-opacity-10 border-solid border-b-2"
      animate={hidden ? "hidden" : "show"}
      variants={navScrollVariants}
    >
      <div className="font-playfair font-bold text-xl md:text-3xl tracking-tighter">
        <a href="/"> Nova</a>
      </div>

      <ul className="flex justify-between gap-5 text-xs md:text-lg uppercase font-fira">
        <NavLink title={"skills"} scroll={500} />
        <NavLink title={"projects"} scroll={1400} />
        <NavLink title={"about me"} scroll={5000} />
      </ul>
    </motion.div>
  );
};

export default Navbar;
