
import './App.css'

import TODO from './TODO';
import LOTTRY from './LOTTRY';
import Ticket from './Ticket';
import { sum } from './helper';


function App(){
  let winCondtion=(ticket)=>{
    return sum(ticket)===15
  }

  return(

    <>
   
    <LOTTRY n={3} winCondtion={winCondtion}/>
    
    
    </>
  );
 }
  
   

export default App;
