// / <reference lib="dom" />
// / <reference types="node" />
import { IoSend } from "react-icons/io5";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../App";

const InputBar: React.FC = () => {
  const context = useContext(Context);
  const [isListening, setIsListening] = useState<boolean>(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  if (!context) {
    throw new Error("InputBar must be used within a Context Provider");
  }

  const { inputVal, setInputVal, SendPrompt } = context;

  // Initialize Speech Recognition once
  useEffect(() => {
    const SpeechRecognitionAPI =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognitionAPI) {
      recognitionRef.current = new SpeechRecognitionAPI() as SpeechRecognition;
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");
        setInputVal(transcript);

        // Clear previous timeout
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // Set a timeout to auto-send after 2 seconds
        timeoutRef.current = setTimeout(() => {
          SendPrompt();
        }, 2000);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [setInputVal, SendPrompt]);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  };

  // Event listener for Enter key press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        SendPrompt();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [inputVal, SendPrompt]);

  return (
    <div className=" fixed z-10 w-full bg-[#1b1c1d] bottom-12 flex justify-center items-center">
      <input
        className="mx-3 relative w-[600px] border-gray-500 border rounded-4xl px-8 py-4 focus:outline-none"
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Ask FinMate"
      />

      {/* Speech-to-Text Button */}
      <div className="flex gap-2 relative -left-28">
        <div
          onClick={isListening ? stopListening : startListening}
          className=" text-xl p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200 cursor-pointer">
          {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
        </div>

        {/* Send Button */}
        <div
          onClick={SendPrompt}
          className=" text-xl p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200 cursor-pointer">
          <IoSend />
        </div>
      </div>
    </div>
  );
};

export default InputBar;
