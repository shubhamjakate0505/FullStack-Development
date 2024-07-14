

import { useState ,useEffect } from "react"

export default function Count(){
    let [countx,setCountx]=useState(0)
    let [county,setCounty]=useState(0)

    let increx=()=>{
        setCountx(currCount=>currCount+1)
    }
    let increy=()=>{
        setCounty(currCount=>currCount+1)
    }


    useEffect(function printsometining(){
        console.log("this is the side Effect");
    },[countx])
    return <div>
        <h4>Countx = {countx}</h4>
        <button onClick={increx}>+1</button><br/>
        <h4>County = {county}</h4>
        <button onClick={increy}>+1</button>
    </div>
}