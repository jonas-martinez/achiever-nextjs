"use client";
import { useState } from "react";

export default function Counter() {
    let [counter, setCounter] = useState(0);
    return (
        <div>
            <p>test</p>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
        </div>
    );
}