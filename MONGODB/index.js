const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
main().then(()=>{
    console.log("connection sucessfully")
})
.catch(err => console.log(err));

const userSchema=new mongoose.Schema({
    Name:String,
    email:String,
    age:Number
})
const User=mongoose.model("User",userSchema);
User.findOneAndDelete({Name:"Ashmi"}).then((data)=>{
    console.log(data)
})
/* User.find({}).then((res)=>{
    console.log(res)
}) */
// User.find({age:{$gte:19



/* const User2=new User({
    Name:"ishu",
    email:"ishudarling0505@gmail.com",
    age:22
}) */
/* User2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err)
});
 */
/* User.insertMany([
    {Name:"prashat",email:"prashatgharbde@gmail.com",age:23},
    {Name:"Ashmi",email:"Ashmimodale@gmail.com", age:24},
    {Name:"sumit",email:"sumitjakate@gmal.comm",age:24}])
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
}); */