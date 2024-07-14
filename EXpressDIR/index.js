 const express=require("express");
 let app=express();
//  console.dir(app);

let port=3000;
app.listen(port,()=>{
    console.log(`app listning the data at the port ${port}`);
});

// -------------path parameter------------------
app.get("/",(req,res)=>{
    res.send("Hello i am root");
});
app.get("/:username/:pass",(req,res)=>{
    let {username,pass}=req.params;
    // res.send("Hello i am root");
    res.send(`hello mr ${username} your password is  ${pass} `);
});

// ---------------------------------------------------
/* app.get("/home",(req,res)=>{
    res.send({
        name:"banana",
        color:"yello",
        
    });
});
app.get("/search",(req,res)=>{
    res.send({
        name:"banana",
        color:"yello",
        
    });
});
 */
/* app.use((req,res)=>{
    console.log("Request Received");
    res.send("This Is a Basic Response");
}) */