import Content from "./Components/Main/Content";
import Navbar from "./Components/Main/Navbar";
import InputBar from "./Components/Main/InputBar";
import Sidebar from "./Components/Sidebar";
import { createContext, useState } from "react";
export const Context = createContext(null);
function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading , setLoading] = useState(false);
  const [data , setData] = useState("");
  return (
    <Context.Provider value={{isExpanded  ,setIsExpanded ,inputVal, setInputVal,  prompt , setPrompt, loading  ,setLoading , data,  setData}}>
    <div className="overflow-hidden h-[100vh] flex text-white">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="bg-[#1b1c1d] w-full">
      <Navbar />
      <Content />
      <InputBar />
      </div>
    </div>
    </Context.Provider>
  );
}
export default App;
