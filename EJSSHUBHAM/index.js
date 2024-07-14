const express=require("express")
const app=express()
const port=8080;



app.listen(port,()=>{
    console.log(`listing data on ${port}`)
})
app.use((req,res)=>{
    console.log("Rewuest Was Received");
    res.send("This is a basic Response ")
})