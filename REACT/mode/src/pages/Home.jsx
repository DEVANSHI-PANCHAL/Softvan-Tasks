
// Home.jsx 
import React from "react"; 
import { useDispatch , useSelector } from "react-redux"; 
import { MdOutlineDarkMode } from "react-icons/md"; 
import { MdOutlineLightMode } from "react-icons/md"; 
import { setMode } from "../slices/modeSlice"; 
  
const Home = () => { 
    const dispatch = useDispatch(); 
    const { darkMode } = useSelector( 
        (state) => state.mode 
    ); 
    return ( 
        <div> 
            <section className={`h-screen  
                                 flex  
                                 items-center  
                                 justify-center  
                                 text-2xl  
                                 cursor-pointer  
                                 ${darkMode?  
                                 "text-pink-100 "
                                 : "text-richblack-700"}`} 
                     onClick={() => {dispatch(setMode(!darkMode) 
                    )}}> 
                {darkMode ? ( 
                    <MdOutlineLightMode size={"100px"}/> 
                ) : ( 
                    <MdOutlineDarkMode size={"100px"}/>)} 
            </section> 
        </div> 
    ); 
}; 
  
export default Home;