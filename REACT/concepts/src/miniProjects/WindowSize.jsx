import React, { useEffect, useState } from 'react'

const WindowSize = () => {
    const [size,setSize] = useState(window.screen.width)

    const actualWidth = ()=>{
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth)
        return ()=>{

            window.removeEventListener("resize",actualWidth)
        }
    })
  return (
    <div>
      {size}
    </div>
  )
}

export default WindowSize
