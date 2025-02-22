import { useContext } from "react";
import { Context } from "../../App";

const PromptResponse = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("No content found");
    }

    const { lineData } = context;

    return (
        <div className="mt-4 space-y-2 p-3 rounded-r-3xl rounded-tl-3xl sm:w-[80%] bg-purple-700">
            {lineData.map((line, index) => {
                // Headings (if the line starts and ends with "*")
                if (line.startsWith("*") && line.endsWith("*")) {
                    return <h2 key={index} className="text-xl font-bold mt-4">{line.replace(/\*/g, "").trim()}</h2>;
                }

                // Bullet Points (if the line starts with "-" or "•")
                if (line.startsWith("-") || line.startsWith("•")) {
                    return <li key={index} className="ml-6 list-disc">{line.replace(/^[-•]\s*/, "")}</li>;
                }

                // Bold Formatting: Makes text after `*` and between `:` bold
                let formattedLine = line
                    .replace(/\*(.*?)\*/g, "<b>$1</b>")  // Bold text wrapped in `*`
                    .replace(/:(.*?)\s/g, ": <b>$1</b> "); // Bold text after `:`

                // Normal Paragraph with formatted text
                return (
                    <p key={index} className="text-justify" dangerouslySetInnerHTML={{ __html: formattedLine }}></p>
                );
            })}
        </div>
    );
};

export default PromptResponse;