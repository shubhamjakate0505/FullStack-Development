

// -------------------------------------<await>-----------------------------------------
/* await : - Pauses the Excution of its Surrounding Async Function until the Promis 
            is settled (Resolved or Rejected) 
            Note - Await keyword must be use in async Function Only */
function getnum(){
    return new Promise((Resovled,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1
            if(num >3){
                // throw "error orcued";
                reject("Promice Rejected");
            }
            console.log(num)
            Resovled();
        },1000)
});
}
async function accesnum(){
    try{
        await getnum();
        await getnum();
        await getnum();
        await getnum();
        }
    catch(err){
        console.log("Error Catuch")
        console.log(err)
    }
    let num=12
        console.log(num)
   
}
accesnum()

// ------------------------------------</await>-------------------------------------------------