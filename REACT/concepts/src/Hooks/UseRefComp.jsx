import React, { useRef } from 'react'

const UseRefComp = () => {

    const name = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.current.value)
    }
  return (
    <div>
      <form action="">
        <input type="text" ref={name} />
        <button onClick={handleSubmit}></button>
      </form>
    </div>
  )
}

export default UseRefComp
