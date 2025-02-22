import { useContext, useState, useEffect } from "react";
import { Context } from "../../App";

const PromptResponse = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("No content found");
    }

    const { lineData } = context;
    const [displayedText, setDisplayedText] = useState<string[]>([]);

    useEffect(() => {
        let wordsArray: string[] = [];
        
        // Split each line into words while preserving the original structure
        lineData.forEach(line => {
            wordsArray.push(...line.split(" "), "\n"); // Split words & add line break marker
        });

        let index = 0;
        const interval = setInterval(() => {
            if (index < wordsArray.length) {
                setDisplayedText(prev => [...prev, wordsArray[index]]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 40); // Adjust speed here (100ms per word)

        return () => clearInterval(interval);
    }, [lineData]);

    return (
        <div className="mt-4 space-y-2 p-3 rounded-r-3xl rounded-tl-3xl sm:w-[80%] bg-purple-500">
            {displayedText.map((word, index) => {
                if (word === "\n") return <br key={index} />; // Preserve new lines
                
                // Headings (if the line starts and ends with "*")
                

                // Bullet Points (if the line starts with "-" or "•")
                if (word.startsWith("-") || word.startsWith("•")) {
                    return <li key={index} className="ml-6 list-disc">{word.replace(/^[-•]\s*/, "")}</li>;
                }

                // Bold Formatting: Makes text after `*` and between `:` bold
                let formattedWord = word
                    .replace(/\*(.*?)\b/g, "<b>$1</b>") // Bold after `*`
                    .replace(/:\s*(.*?)\b/g, ": <b>$1</b>"); // Bold after `:`

                return <span key={index} className="text-justify" dangerouslySetInnerHTML={{ __html: formattedWord + " " }} />;
            })}
        </div>
    );
};

export default PromptResponse;