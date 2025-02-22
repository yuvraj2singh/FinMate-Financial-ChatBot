import { useContext } from "react";
import { Context } from "../../App";
import Chats from "./Chats";
import FirstPage from "./FirstPage";

const Content = () => {
  const context = useContext(Context);

  // ✅ Ensure context is not null before accessing properties
  if (!context) {
    throw new Error("Content must be used within a Context Provider");
  }

  const {prompt} = context;

  return (
    <>
      {prompt ? (
        <Chats />
      ) : (
        <FirstPage />
      )}
    </>
  );
};

export default Content;