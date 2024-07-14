import { useState } from "react";

export default function Counter(){
    let [Count,setCount]=useState(0);
   /*  let arr=useState(0);
    console.log(arr)
     */
    function increse(){
        setCount(Count+1)
        // Count=Count+1;
        // console.log(Count)
    }
    
    return(
        <div>
            <h3>Count={Count}</h3>
            <button onClick={increse}>Count</button>
        </div>

    );
}