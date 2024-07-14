import { useState } from "react"

export default function LODO_BOARD(){

let [moves,setmoves]=useState({blue:0,yellow:0,Green:0,Red:0})
   let updateblue=()=>{
    setmoves((previus)=>{
        return {...previus, blue:previus.blue+1};
    })
    
   /*  setmoves({...moves,blue:moves.blue+=1}) */
   }
   let updatered=()=>{
    setmoves((previus)=>{
        return {...previus, yellow:previus.yellow+1};
    })
    
   /*  setmoves({...moves,blue:moves.blue+=1}) */
   }
   let updateyellow=()=>{
    setmoves((previus)=>{
        return {...previus, Green:previus.Green+1};
    })
    
   /*  setmoves({...moves,blue:moves.blue+=1}) */
   }
   let updategreen=()=>{
    setmoves((previus)=>{
        return {...previus, Red:previus.Red+1};
    })
    
   /*  setmoves({...moves,blue:moves.blue+=1}) */
   }
   
   
   
   

  
  
  
   return (
        <><p>Game Begins !</p>
        <div className="board">
         <p>Blue Moves={moves.blue}</p>
         <button style={{backgroundColor:"Blue"}} onClick={updateblue}>+1</button>  
         <p>Yellow Moves={moves.yellow}</p>
         <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button> 
         <p>Green Moves={moves.Green}</p>
         <button style={{backgroundColor:"green"}}onClick={updategreen}>+1</button> 
         <p>Red Moves={moves.Red}</p>
         <button style={{backgroundColor:"red"}}onClick={updatered}>+1</button>  
        </div>    

        
        </>
    )
}