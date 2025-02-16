import { MdShortText } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

interface recentPrompts {
    title:string
}

const RecentPrompts:React.FC<recentPrompts> = ({title}) => {
  return (
    <div className="relative w-full rounded-4xl border py-1 px-3 flex items-center group hover:bg-gray-700 transition-all duration-200 cursor-pointer">
        <MdShortText />
        <span className="ml-2">{title}</span>
        <span className="absolute right-3 p-1 rounded-full hidden group-hover:block hover:bg-gray-600 transition-all duration-200 cursor-pointer"><BsThreeDotsVertical /></span>
    </div>
  )
}
export default RecentPrompts