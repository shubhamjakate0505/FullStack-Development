

import { useState } from "react";
import { genticket, sum } from "./helper";
import Ticket from "./Ticket";
export default function LOTTRY({n=3,winCondtion}){
    let [ticket,setTicket]=useState(genticket(n));
    let isWining=winCondtion(ticket);
   let bayticket=()=>{
    setTicket(genticket(n))
   }
    return (
     <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <button onClick={bayticket}>Buy New Ticket</button>
        <h3>{isWining && "Congulation, you won"}</h3>
    </div>);
}