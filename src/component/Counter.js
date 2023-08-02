import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterReducer";

export default function Counter() {
    const count = useSelector((state) => state.counterReducer.count);
    console.log('CCC===>>>', count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Count</h2>
            <h1 style={{ color: 'green' }}>{count}</h1>
            <button onClick={() => dispatch(increment())}>INC +</button>
            <button onClick={() => dispatch(decrement())}>DEC +</button>
        </div>)
}