import { useState } from "react"


export default function Form(){
    let [FormData,setFromData]=useState({
        fullName:"",
        Username:""

    })

    let handelevent=(event)=>{
        let fileName=event.target.name;
        let newvalue=event.target.value;
        

        setFromData=((currdata)=>{
            currdata[fileName]=newvalue;
            return {...currdata};
        });
    };
    
    
    return <>
    <form>
        <label htmlFor="fullname">Full Name  : </label>
        <input type="text"  placeholder="Enter Your Name" value={FormData.fullName} onChange={handelevent} id="fullname" name="fullName"/>
        <br/><br/>
        <label htmlFor="Username">UserName  : </label>
        <input type="text"  placeholder="Enter Your Name" value={FormData.Username} onChange={handelevent}  id="Username" name="Username"/>

        <button>Submit</button>
    </form>
    
    </>
}