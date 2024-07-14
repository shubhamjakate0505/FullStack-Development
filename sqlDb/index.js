const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const express=require("express");
 const app=express();
const port=8080;
const methodOverride=require("method-override")
const path=require("path")





app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}))
app.set("View engine","ejs");
app.set("views",path.join(__dirname,"/views"));



const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Quiz_app',
    password:"ShubhamJakate@0505"
  });
  let RandomUser=()=> {
    
    return [faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
     ];
           
    };

  /////inserting data into database

/* let q="INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";


 

 let user=["123cp","shubhamcp","abcp@gmai.comc","abccp"]
   try{
    connection.query(q,user,(err,result)=>{
            if (err) throw err;
            console.log(result)
            console.log(result.length)
            });
    
    }catch(err){
        console.log(err)
    } */

// connection.end(); 

//Home Route
app.get("/", (req,res)=>{
  let q="SELECT count(*) FROM user;";
   try{
    connection.query(q,(err,result)=>{
            if (err) throw err;
            let count=result[0]["count(*)"]
            
            res.render("index.ejs",{count});
            // console.log(result.length)
            });
    
    }catch(err){
        console.log(err)
        res.send("Some error in the file")
    }
    });

//user Route
app.get("/user",(req,res)=>{
  let q="SELECT * FROM user;";
  try{
    connection.query(q,(err,user)=>{
            if (err) throw err;
            // console.log(result);
            // res.send(result);
            
            res.render("user.ejs",{user});
            
            });
    
    }catch(err){
        console.log(err)
        res.send("Some error in the file")
    }

// res.send("working Go ahead");



})


//Edit Route


app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
     connection.query(q,(err,result)=>{
            if (err) throw err;
            let user=result[0]
            // res.send(result);
            
            res.render("edit.ejs",{user});
            
            });
    
    }catch(err){
        console.log(err)
        res.send("Some error in the file")
    }


  // res.send("edit.ejs");
})

app.patch("/user/:id/",(req,res)=>{
  let {id}=req.params;
  let {pass:from_pass , userName:pass}=req.body;
  
  let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
     connection.query(q,(err,result)=>{
            if (err) throw err;
            let user=result[0]
            if(from_pass!=user.password){
              res.send("worng pass")
            }
            res.send(user);
            
            // res.render("edit.ejs",{user});
            
            });
    
    }catch(err){
        console.log(err)
        res.send("Some error in the file")
    }
  
})



app.listen(port,()=>{
  console.log("Listning Data on the Port : 8080")
});




