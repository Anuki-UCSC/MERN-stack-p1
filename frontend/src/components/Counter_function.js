import React, { useState } from "react";

function Counter_funtion(){
    let [number,setNumber]=useState(0)  // [$state_name,$state_updating method]

    function increment(){
        setNumber(++number)
    }

    return(
        <div>
            <hr/>
            <h3>Function Component</h3>
            <h1>Counter = {number}</h1>
            <button onClick={increment}>Incriment</button>
        </div>
    )
}

export default  Counter_funtion;