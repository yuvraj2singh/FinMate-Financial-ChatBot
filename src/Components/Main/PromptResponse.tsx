import { useContext } from "react";
import { Context } from "../../App";

const PromptResponse = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("No content found");
    }

    const { lineData } = context;

    return (
        <div className="mt-4 space-y-2">
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
                const formattedLine = line
                    .replace(/\*(.*?)\s/g, "<b>$1</b> ") // Bold text after `*`
                    .replace(/:(.*?)\s/g, ": <b>$1</b> "); // Bold text between `:`

                // Normal Paragraph
                return (
                    <p key={index} className="text-justify" dangerouslySetInnerHTML={{ __html: formattedLine }}></p>
                );
            })}
        </div>
    );
};

export default PromptResponse;