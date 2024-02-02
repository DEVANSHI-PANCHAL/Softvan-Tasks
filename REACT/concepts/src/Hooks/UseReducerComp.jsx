import React, { useReducer } from 'react'

const UseReducerComp = () => {
  const initialState = 0;
  const reducer = (state, action) =>{
    if(action.type==="inc") {
      return state + 1;
    }
    if(action.type==="dec") {
      return state - 1;
    }
  }

  const[state, dispatch]=useReducer(reducer, initialState)
  return (
    <div>
    <p>{state}</p>
      <form action="">
        <input type="text" />
        <button onClick={()=>dispatch({type: "inc"})}>Increment</button>
      </form>
    </div>
  )
}

export default UseReducerComp
