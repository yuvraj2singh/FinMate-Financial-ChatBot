import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Main/Navbar"
import { useState } from "react"

function App() {
  const [isExpanded , setIsExpanded] = useState(false);
  return (
    <div className="overflow-hidden h-[100vw] text-white">
    <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
    <div className="bg-[#1b1c1d]">
      
    </div>
    </div>
  )
}
export default App
