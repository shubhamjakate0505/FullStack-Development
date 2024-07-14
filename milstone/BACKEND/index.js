const express=require("express")
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,pass}=req.query;
    res.send(`Standered Get Response ,welcome mr ${user}`)
})
app.post("/register",(req,res)=>{
    let {user,pass}=req.body;
    res.send(`Standered Post Response ,welcome mr ${user}`)
})
app.listen(port,()=>{
    console.log(`linstig Data Into server side${port}`)
})  