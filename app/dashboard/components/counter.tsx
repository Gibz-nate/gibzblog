"use client";
import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Click to increment</h1>
            <button onClick={() => setCount(count +1)}>Likes: {count}</button>
        </div>
    )
}