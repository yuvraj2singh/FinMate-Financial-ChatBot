import { MdShortText } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { MdPushPin } from "react-icons/md";

interface recentPrompts {
  isExpanded: boolean;
  title: string;
}

const RecentPrompts: React.FC<recentPrompts> = ({ isExpanded, title }) => {
  const [hiddenSettings, setHiddenSettings] = useState(true);
  return (
    <div
      className={`relative w-full rounded-4xl border py-1 px-3 flex items-center group hover:bg-gray-700 transition-all duration-300 cursor-pointer ease-linear`}>
      <MdShortText />
      <span className="ml-2">{title}</span>

      {/* 3 dots settings hover to display */}
        <span
          onClick={() => setHiddenSettings(!hiddenSettings)}
          className="absolute right-3 p-1 rounded-full hidden group-hover:block hover:bg-gray-600 transition-all duration-200 cursor-pointer">
          <BsThreeDotsVertical />
        </span>
        <div className="absolute -right-10">
            <p><MdPushPin /> Pin</p>
        </div>
    </div>
  );
};
export default RecentPrompts;
