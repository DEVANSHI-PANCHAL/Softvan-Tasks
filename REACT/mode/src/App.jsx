
// App.js 
import Home from "./pages/Home"; 
import { useSelector } from "react-redux"; 
  
function App() { 
  const { darkMode } = useSelector((state) => state.mode); 
  return ( 
    <div className={`transition-all  
                     duration-500  
                     ease-in-out  
                     ${darkMode ?  
                     "bg-black " :  
                     "bg-white"}`}> 
      <Home /> 
    </div> 
)} 
export default App;