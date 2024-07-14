const mongoose = require('mongoose');
const {Schema}=mongoose;

main().then(()=>{
    console.log("Connection Succesfully")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}
const UserSchema=new Schema({
    username:String,
    email:String
});
const postSchema=new Schema({
    contant:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

const User=mongoose.model("User","UserSchema");
const Post=mongoose.model("Post","postSchema");

let addData=async()=>{
    let user1=new User({
        username:"salman",  
        email:"salman@gmail.com"
    })
    let post1=new Post({
        contant:"this is salmn",  
        likes:18,
    })
    post1.user=user1;
    await user1.save();
    await post1.data();
}
addData();