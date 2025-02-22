import { useContext } from "react";
import { Context } from "../../App";

const FirstPage: React.FC = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("No content found");
  }

  const { user, setPrompt, SendPrompt } = context;

  // Function to set input and send the prompt
  const setInput = (text: string) => {
    setPrompt(text);
    SendPrompt();
  };

  return (
    <div className="flex flex-col gap-3 h-[80vh] justify-center items-center">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-4xl font-bold flex">
        Hello, {user}
      </div>
      
      {/* Common prompts */}
      <div className="flex flex-col lg:flex-row gap-5 mt-8">
        <div
          onClick={() => setInput("What is financial aid?")}
          className="border p-3 bg-gray-800 text-white cursor-pointer rounded-3xl hover:bg-gray-700 transition-all duration-300"
        >
          What is financial aid?
        </div>
        <div
          onClick={() => setInput("How do I apply for financial aid?")}
          className="border p-3 bg-gray-800 text-white cursor-pointer rounded-3xl hover:bg-gray-700 transition-all duration-300"
        >
          How do I apply for financial aid?
        </div>
        <div
          onClick={() => setInput("What is the FAFSA?")}
          className="border p-3 bg-gray-800 text-white cursor-pointer rounded-3xl hover:bg-gray-700 transition-all duration-300"
        >
          What is the FAFSA?
        </div>
      </div>
    </div>
  );
};

export default FirstPage;