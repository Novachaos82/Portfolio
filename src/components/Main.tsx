import { FC } from "react";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
