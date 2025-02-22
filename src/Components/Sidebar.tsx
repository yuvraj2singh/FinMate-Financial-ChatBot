import { RxHamburgerMenu } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { useContext, useState } from "react";
import { Context } from "../App";

interface ExpandInterface {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<ExpandInterface> = ({ isExpanded, setIsExpanded }) => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context not found");
  }

  const { recentPrompts, setPrompt, setInputVal ,setLineData} = context;

  const [isManualExpand, setIsManualExpand] = useState(false);

  const mouseIn = () => {
    if (!isManualExpand) {
      setTimeout(() => {
        setIsExpanded(true);
      }, 300);
    }
  };

  const mouseOut = () => {
    if (!isManualExpand) {
      setTimeout(() => {
        setIsExpanded(false);
      }, 100);
    }
  };

  const handleHamburgerClick = () => {
    setIsManualExpand(prev => !prev);
    setIsExpanded(prev => !prev);
  };

  // 🔹 Handle New Chat Reset
  const handleNewChat = () => {
    setPrompt(""); // Clear the prompt
    setInputVal(""); // Clear input field
    setLineData([]); // Clear previous responses
  };

  return (
    <div
      className={`p-3 bg-[#282a2c] h-[100%] flex flex-col gap-3 transition-all duration-200 ease-linear
        ${isExpanded ? "w-[300px]" : "w-[50px] overflow-hidden"}`}
    >
      {/* Hamburger Menu (Manual Control) */}
      <div
        onClick={handleHamburgerClick}
        className="my-4 p-2 hover:bg-gray-700 rounded-full cursor-pointer w-fit"
      >
        <RxHamburgerMenu />
      </div>

      {/* Main Sidebar Content (Hover Control) */}
      <div className="w-full h-full" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
        <button
          onClick={handleNewChat} // 🔹 Reset chat on click
          className="text-xl my-10 p-2 rounded-full hover:bg-gray-700 cursor-pointer flex items-center w-fit"
        >
          <GoPlus />
          <span className={`ml-2 text-lg transition-all duration-500 ${!isExpanded ? "hidden" : ""}`}>
            New Chat
          </span>
        </button>

        {/* Recent Chats */}
        <div>
          <span
            className={`transition-all duration-200 ease-linear delay-100 ${
              isExpanded ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            Recent
          </span>
          <div className={`mt-3 h-[300px] overflow-scroll flex flex-col gap-3 ${!isExpanded ? "hidden" : ""}`}>
            {recentPrompts.map((prompt: string, index: number) => (
              <button
                key={index}
                onClick={() => setPrompt(prompt)} // Click to re-run prompt
                className="text-left p-2 rounded-md bg-gray-700 hover:bg-gray-600"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;