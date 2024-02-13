import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement,reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    const [amount, setIncAmt] = useState(0)
    const addValue  = Number(amount) || 0;

    return (
        <>
            <div>{count}</div>
            <button onClick={() => { dispatch(increment()) }}> +</button>
            <button onClick={() => { dispatch(decrement()) }}> -</button>
            <button onClick={() => { dispatch(reset()) }}> reset</button>
            <input value={amount} onChange={(e)=>{setIncAmt(e.target.value)}}></input>
            <button onClick={() => { dispatch(incrementByAmount(addValue)) }}> inc by amt</button>
        </>
    );
}

export default Counter;
