import { MdShortText } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const RecentPrompts= () => {
  return (
    <div className="relative w-full rounded-4xl border py-1 px-3 flex items-center hover:bg-gray-700 transition-all duration-200 cursor-pointer">
        <MdShortText />
        <span className="ml-2">Gemini's API Usage</span>
        <span className="absolute right-3 p-1 rounded-full hover:bg-gray-600 transition-all duration-200 cursor-pointer"><BsThreeDotsVertical /></span>
    </div>
  )
}
export default RecentPrompts