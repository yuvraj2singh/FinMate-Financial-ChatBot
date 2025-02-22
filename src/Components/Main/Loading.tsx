import { SiGooglegemini } from "react-icons/si";

const Loading = () => {
  return (
    <div className="bg-[#1b1c1d] flex gap-2 items-center ">
      <SiGooglegemini className="text-6xl text-blue-400 animate-spin" />
      <span>
      Just a Second...
        </span> 
    </div>
  );
};

export default Loading;