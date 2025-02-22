import Content from "./Components/Main/Content";
import Navbar from "./Components/Main/Navbar";
import InputBar from "./Components/Main/InputBar";
import Sidebar from "./Components/Sidebar";
import { createContext, useEffect, useState } from "react";
import runChat from "./config/gemini";

// ✅ Define the Type for Context
interface ContextType {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
  inputVal: string;
  setInputVal: (value: string) => void;
  prompt: string;
  setPrompt: (value: string) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  lineData: string[];
  user: string;
  recentPrompts: string[];
}

export const Context = createContext<ContextType | null>(null);

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [lineData, setLineData] = useState<string[]>([]);
  const [user, setUser] = useState("Yuvraj");

  const [recentPrompts, setRecentPrompts] = useState<string[]>([]);

  // 🔹 Load recent prompts from localStorage on first load
  useEffect(() => {
    const storedPrompts = localStorage.getItem("recentPrompts");
    if (storedPrompts) {
      setRecentPrompts(JSON.parse(storedPrompts));
    }
  }, []);

  // 🔹 Function to store new prompt & update local storage
  const addPrompt = (newPrompt: string) => {
    if (newPrompt.trim() === "") return;
  
    setRecentPrompts((prev) => {
      // Remove duplicates and maintain order
      const updatedPrompts = [newPrompt, ...prev.filter((p) => p !== newPrompt)].slice(0, 10); // Keep last 10 prompts
  
      localStorage.setItem("recentPrompts", JSON.stringify(updatedPrompts)); // Save to local storage
      return updatedPrompts;
    });
  };

  // 🔹 Fetch chat data
  const getData = async (prompt: string) => {
    setLoading(true);
    addPrompt(prompt); // Save the prompt before fetching response
    const data = await runChat(prompt);
    setLineData(data.split("**"));
    setLoading(false);
  };

  useEffect(() => {
    if (prompt.trim() !== "") {
      getData(prompt);
    }
  }, [prompt]);

  return (
    <Context.Provider
      value={{
        isExpanded,
        setIsExpanded,
        inputVal,
        setInputVal,
        prompt,
        setPrompt,
        loading,
        setLoading,
        lineData,
        user,
        recentPrompts,
      }}
    >
      <div className="overflow-hidden h-[100vh] flex text-white">
        <div className="hidden sm:block">
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>
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