import { useContext } from "react";
import { Context } from "../../App";
import Loading from "./Loading";
import Prompt from "./Prompt";
import PromptResponse from "./PromptResponse";
import ErrorBoundary from "./ErrorBoundary";

const Chats = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context not found");
  }
  const {loading } = context;
  return (
  <div className=" p-4 lg:w-[750px] m-auto h-[450px] overflow-scroll rounded-3xl scrollbar-hide">
    <p className="text-white"><Prompt /></p>
    {loading ? <Loading /> : 
    <ErrorBoundary>
    <PromptResponse />
  </ErrorBoundary>
    }
  </div>
  )
};
export default Chats;
