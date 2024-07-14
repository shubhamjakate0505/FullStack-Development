const express=require("express")
const app=express();
const port=8080;
const mongoose = require('mongoose');
const Chat=require("./model/chat")
const path=require("path")
const ExpressError=require("./ExpressError")
const methodOverride=require("method-override")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"));

main().then((res)=>{
    console.log("Connection Was Successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

  
}
/* let chat1=new chat({
    form:"shubhma",
    to:"ashwini",
    msg:"Love you ishu",
    created_at:new Date()
})
chat1.save().then((res)=>{
    console.log(res)
})
 */
app.get("/chats",async (req,res)=>{
    let chats= await Chat.find();
    console.log(chats)
    res.render("index.ejs",{chats})
})
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"page Not Found");
    res.render("newchat.ejs")
})
app.post("/chats",async (req,res,next)=>{
    try{
        let {form,to,msg}=req.body;
        let newChat=new Chat({
            form:form,
            to:to,
            msg:msg,
            created_at:new Date()
        })
       
       
        await newChat.save()
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
   

})

// asyncWrap(fn)

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err))
    };
}


//new -show route
app.get("/chats/:id",asyncWrap(async(req,res,next)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    if(!chat){
        next(new ExpressError(404,"chat Not Found"));
    }
    res.render("edit.ejs",{chat})
}));

 app.get("/chats/:id/Edit",async (req,res)=>{
    let {id} =req.params;
    let chat=await Chat.findById(id)
    //  console.log("Working Well")
     res.render("edit.ejs",{chat})

 }) 
 app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true})
    console.log(updatedChat)
    res.redirect("/chats")
 });
 //delete Route
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let deletdchat=await Chat.findByIdAndDelete(id)
    console.log(deletdchat)
    res.redirect("/chats")
})

//Error Handling
app.use((err,req,res,next)=>{
    let {status=500,message="some Error"}=err;
    res.status(status).send(message)
})
/* app.get("/",(req,res)=>{
    res.render("")
}) */
app.listen(port,()=>{
    console.log("Listen on port :8080")
})