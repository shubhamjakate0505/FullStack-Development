const express=require("express")
const app=express();
const path=require("path")

const port =8080;
app.use(express.static(path.join(__dirname,"Public")));
app.set("view engin","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    // res.send("this is root");
    res.render("home.ejs")
})
// --------------for the instagram-----------------
/* app.get("/ig/:username",(req,res)=>{
    let nums=["shubham","Ashwini","Shweta","Prashant","mayur"]
   let {username}=req.params;
   res.render("instgram.ejs",{username,nums})
 *///    console.log(username)
    // res.send("this is root");
    // res.render("para.ejs",{dicenum})
// })
// --------------for the instagram-----------------
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaDAta=require("./data.json");
    const data=instaDAta[username];
    console.log(data);
    
    res.render("instgram.ejs",{ data });

})

// --------------END instagram---------------------

// ---------------for the Dice:para----------------
app.get("/dice",(req,res)=>{
    
    let dicenum=Math.floor(Math.random()*6)+1
    // res.send("this is root");
    res.render("para.ejs",{dicenum})
})

// ---------------End Dice----------------
app.get("/search",(req,res)=>{
    res.send("this is root");
    // res.render("home.ejs")
})
app.listen(port,()=>{
    console.log(`listing On the Port${port}`)
});