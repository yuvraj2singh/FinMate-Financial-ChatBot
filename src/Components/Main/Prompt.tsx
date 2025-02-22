import { useContext } from "react"
import { Context } from "../../App"

const Prompt = () => {
    const context = useContext(Context);
    if(!context){
        throw new Error("No content found");
    }
    const {prompt} = context;

  return (
    <div className="w-full flex justify-end">
        <div className="p-3 bg-purple-700 rounded-l-3xl rounded-tr-3xl">
        {prompt}</div>
        </div>
  )
}
export default Prompt