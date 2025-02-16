import { RxHamburgerMenu } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import RecentPrompts from "./RecentPrompts";

interface ExpandInterface {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<ExpandInterface> = ({ isExpanded, setIsExpanded }) => {
  // Track manual click on the hamburger
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
    // Toggle the sidebar and lock it in the expanded state if opened manually
    setIsManualExpand((prev) => !prev);
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`p-3 bg-[#282a2c] fixed h-[100%] flex flex-col gap-3 transition-all duration-200 ease-linear
        ${isExpanded ? "w-[300px]" : "w-[50px] overflow-hidden"}`}>
      {/* Hamburger Menu (Manual Control) */}
      <div
        onClick={handleHamburgerClick}
        className="my-4 p-2 hover:bg-gray-700 rounded-full cursor-pointer w-fit">
        <RxHamburgerMenu />
      </div>

      {/* Main Sidebar Content (Hover Control) */}
      <div className="w-full h-full" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
        <div className="text-xl my-10 p-2 rounded-full hover:bg-gray-700 cursor-pointer flex items-center w-fit">
          <GoPlus />
          <div
            className={`transition-all duration-500 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}>
            <span
              className={`text-lg transition-all duration-500 ${
                !isExpanded ? "hidden" : ""
              }`}>
              New Chat
            </span>
          </div>
        </div>

        {/* Recent chats */}
        <div>
            <span className={`transition-all duration-200 ease-linear delay-100 ${isExpanded ? "visible opacity-100" : "invisible opacity-0"}`}>Recent</span>
            <div className={`${!isExpanded ? "hidden" : ""}`}>
                <RecentPrompts />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;