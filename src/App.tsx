import "./App.css";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll>
        <Intro />
        <Skills />
        <div className="min-h-screen bg-blue-400"></div>
      </SmoothScroll>
    </>
  );
}

export default App;
