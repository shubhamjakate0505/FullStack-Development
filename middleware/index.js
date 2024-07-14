const express=require("express")
const app=express();
const myer=require("./ExpressError")
const port=8080;


const checkTokan=("/api",(req,res ,next)=>{
    let {tokan}=req.query;
    if (tokan==="giveaccess"){
        next();
    }
    throw new myer(401,"Acess DINAIED");
})
app.get("/err",(req,res)=>{
    abcs=dfdjf
})
app.use((err,req,res,next)=>{
    let {status,message}=err;
    res.status(status).send(message)
    // next(err);
})

app.get("/api",checkTokan,(req,res)=>{
    res.send("data")
})

app.get("/",(req,res)=>{
    res.send("hey this is the basic root");
})

app.get("/some",(req,res)=>{
    res.send("Hey i'm second Response");
})

/* app.use((req,res)=>{
    res.status(404).send("Page not Found")
}) */

app.listen(port,()=>{
    console.log("Listing On the Port: 8080");


})