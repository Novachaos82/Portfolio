import { FC } from "react";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import AboutMe from "./AboutMe";

interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <div className="flex flex-col bg-black">
      <Intro />
      <Skills />

      <Projects />
      <AboutMe />
    </div>
  );
};

export default Main;
