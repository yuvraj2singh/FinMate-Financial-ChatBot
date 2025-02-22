import { IoSend } from "react-icons/io5";
import { useContext, useEffect } from "react";
import { Context } from "../../App";

const InputBar = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("InputBar must be used within a Context Provider");
  }

  const { inputVal, setInputVal, setPrompt } = context;

  // Function to send the prompt
  const SendPrompt = () => {
    if (inputVal.trim() !== "") {
      setPrompt(inputVal);
      setInputVal("");
    }
  };

  // Event listener for Enter key press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        SendPrompt();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [inputVal]); // Runs whenever `inputVal` changes

  return (
    <div className="fixed z-10 w-full bg-[#1b1c1d] bottom-12 flex justify-center items-center">
      <input
        className="mx-3 relative w-[600px] border-gray-500 border rounded-4xl px-8 py-4 focus:outline-none"
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Ask FinMate"
      />
      <div
        onClick={SendPrompt}
        className="relative -left-16 text-2xl p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200 cursor-pointer"
      >
        <IoSend />
      </div>
    </div>
  );
};

export default InputBar;