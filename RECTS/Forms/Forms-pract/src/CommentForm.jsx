import { useState } from "react"

export default function CommentForm(){

    let [formData,setFromData]=useState({
        username:"",
        remarks:"",
        rating:5
    });
   let handelinputchange=(event)=>{
    setFromData((currData)=>{
        return {...currData,[event.target.name]:event.target.value};
    });
   }
let handelsubmit=(event)=>{
    console.log(formData);
    event.preventDefault();
    setFromData({
        username:"",
        remarks:"",
        rating:5
    })
}

    return <div>
                <>
                    <h4>Give a Comment</h4>
                    <form onSubmit={handelsubmit}>
                        <label htmlFor="username">UserName</label>
                        <input type="text" placeholder="username" value={formData.username} onChange={handelinputchange}  id="username" name="username"/>
                        <br/><br/>

                        <label htmlFor="remarks">Remarks</label>
                        <textarea value={formData.remarks} placeholder="Add A Few Rearks Here" onChange={handelinputchange} id="remarks" name="remarks"></textarea>
                        <br/><br/>

                        <label htmlFor="rating">Rating</label>   
                        <input type="number"  placeholder="Rating" min={1} max={5} value={formData.rating} onChange={handelinputchange} id="rating" name="rating"/>
                        <br/><br/><br/><br/>


                        <button>SUBMIT</button>
                    </form>
                </>
            </div>
}