import "./App.css";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll>
        <div className="flex justify-center  items-center w-full h-screen bg-violet-500"></div>
        <div className="flex justify-center  items-center w-full h-screen bg-blue-600"></div>
        <div className="flex justify-center  items-center w-full h-screen bg-black"></div>
        <div className="flex justify-center  items-center w-full h-screen bg-yellow-500"></div>
      </SmoothScroll>
    </>
  );
}

export default App;
