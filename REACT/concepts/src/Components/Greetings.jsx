import React, { useEffect, useState } from 'react'

const Greetings = () => {
    const [greetings, setGreetings] = useState("Morning")
    const time = new Date().toLocaleTimeString();
    useEffect(()=>{
        const hrs = new Date().getHours();
        console.log("object", hrs)

        if (hrs>12 & hrs<17) {
            setGreetings("Afternoon")
        } else if (hrs>0 & hrs>12) {
            setGreetings("Morning")
        }else {
            setGreetings("Evening")
        }
    })
  return (
    <div>
        {time}
      Hello Good {greetings}
    </div>
  )
}

export default Greetings
