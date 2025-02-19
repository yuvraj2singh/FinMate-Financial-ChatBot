import Content from "./Components/Main/Content";
import Navbar from "./Components/Main/Navbar";
import InputBar from "./Components/Main/InputBar";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="overflow-hidden h-[100vh] flex text-white">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="bg-[#1b1c1d] w-full">
      <Navbar />
      <Content />
      <InputBar />
      </div>
    </div>
  );
}
export default App;
