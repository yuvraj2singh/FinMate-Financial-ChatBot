import { useContext } from "react";
import { Context } from "../../App";
import Loading from "./Loading";
import Prompt from "./Prompt";
import PromptResponse from "./PromptResponse";

const Chats = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context not found");
  }
  const {loading } = context;
  return (
  <div className="border p-4 w-[750px] m-auto h-[440px] overflow-scroll rounded-3xl">
    <p className="text-white"><Prompt /></p>
    {loading ? <Loading /> : <PromptResponse />}
  </div>
  )
};
export default Chats;
