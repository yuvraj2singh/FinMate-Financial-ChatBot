import { SiGooglegemini } from "react-icons/si";

const Loading = () => {
  return (
    <div className="bg-[#1b1c1d]">
      <SiGooglegemini className="text-6xl text-blue-400 animate-spin" /> Just a Second...
    </div>
  );
};

export default Loading;