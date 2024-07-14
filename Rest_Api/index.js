const express=require("express")
const app=express();
const port=8080;
const path=require("path");
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"Public")));


let posts=[
    {
    name:"smartdog",
    content:"Caption: i'm smart",
    Image:"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    
    },
    {
        name:"CuteCat",
        content:"Caption: i'm cat",
        Image:"https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        
    },
    {
        name:"CuteDog",
        content:"Caption: i'm Cute Dog",
        Image:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
}
]
app.get("/posts",(req,res)=>{
    
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{

    res.render("newPost.ejs")
    
    })


app.listen(port,()=>{
    console.log("Listing On the Port :8080");
})