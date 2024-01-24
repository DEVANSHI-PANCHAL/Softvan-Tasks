import React, { useEffect, useState } from 'react'

const UseEffectComp = () => {
  const [count, setcount] = useState(0)
  const handleCount = () =>{
    setcount(count+1)
  }
  useEffect(()=>{
    document.title=`${count}`
  },[])
  return (
    <div>
      <button onClick={handleCount}>Click me</button>
    </div>
  )
}

export default UseEffectComp
