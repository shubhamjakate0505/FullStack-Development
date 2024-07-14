let url="https://catfact.ninja/breeds?limit=1"

/* fetch(url).then((res)=>{
    console.log(res);
    return res.json()//res.json make data in readable formate
})
.then((data)=>{
    console.log(data);
    console.log(data.current_page)
})
.catch((err)=>{
    console.log("Error",err)
}) */


// -----------------By using Async wait methiod-------------------

/* async function getcall(){
    try{
        let res= await fetch(url);
        let data=await res.json() //for the valide data 
        console.log(data);
    }
    catch(e){
        console.log(e);
    }
    
} */



//---------------- Axios method ---------------------------------------
/* Axios method: - it return data with Readable Formate no need to do extra Effort
 to get data let's try with above Exampl 
 -to over come the josn() method which is used for making the data in readable formate by using Axios method it return data automatially  */

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let db= await getcall();
    console.log(db);
    let ps=document.querySelector(".okdata");
    ps.innerText=db;
})

 async function getcall(){
    try{
        let res=await axios.get(url);
        // let data=await res.json() //for the valide data 
        return res.data.first_page_url;
    }
    catch(e){
        console.log(e);
        return "No Fact Found";
    }
    
}