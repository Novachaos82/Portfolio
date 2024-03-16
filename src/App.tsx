import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <Main />
      </SmoothScroll>
    </>
  );
}

export default App;
