import { IoSend } from "react-icons/io5";
import runChat from "../../config/gemini";
import { useEffect, useState } from "react";

const InputBar = () => {
  const [inputVal, setInputVal] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading , setLoading] = useState(false);
  const [data , setData] = useState("");
  const getData = async (prompt: string) => {
    const data = await runChat(prompt);
    if (!data) setLoading(true);
    else {
        setLoading(false);
        setData(data);
    }
  };
  useEffect(() => {
    if (prompt.trim() != "" || prompt.length != 0) {
      getData(prompt);
    }
  }, [prompt]);

  const SendPrompt = () => {
    setPrompt(inputVal);
    setInputVal("");
  };
  return (
    <div className="fixed z-10 w-full bg-[#1b1c1d] bottom-12 flex justify-center items-center">
      <input
        className="mx-3 relative w-[600px] border-gray-500 border rounded-4xl px-8 py-4 focus:outline-none"
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Ask Gemini"
      />
      <div
        onClick={() => SendPrompt()}
        className=" relative -left-16 text-2xl p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200 cursor-pointer">
        <IoSend />
      </div>
    </div>
  );
};
export default InputBar;
