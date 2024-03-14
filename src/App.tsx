import "./App.css";
import Main from "./components/Main";

import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll>
        <Main />
        <div className="min-h-screen bg-blue-400"></div>
      </SmoothScroll>
    </>
  );
}

export default App;
