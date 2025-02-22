import { useContext } from "react";
import { Context } from "../../App";
import Chats from "./Chats";

const Content = () => {
  const context = useContext(Context);

  // ✅ Ensure context is not null before accessing properties
  if (!context) {
    throw new Error("Content must be used within a Context Provider");
  }

  const {prompt,user} = context;

  return (
    <>
      {prompt ? (
        <Chats />
      ) : (
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-4xl font-bold flex justify-center items-center h-[80vh]">
          Hello, {user}
        </div>
      )}
    </>
  );
};

export default Content;