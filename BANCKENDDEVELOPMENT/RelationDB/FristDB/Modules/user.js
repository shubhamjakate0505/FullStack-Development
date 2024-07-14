const mongoose = require('mongoose');
const {Schema}=mongoose;

main().then(()=>{
    console.log("Connection Succesfully")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}
const userSchema=new Schema({
    username:String,
    address:[
        {
            _id: false,
            location:String,
            city:String
        },
    ],
});

const User=mongoose.model("User",userSchema);

const adduser=async()=>{
    let user1=new User({
        username:"shubham",
        address:[{
          
            location:"delhi",
            city:"pune"
        }]

    })
   
    user1.address.push({location:"mum",city:"mumbai"});
    let result=await user1.save();
    console.log(result);

}
adduser();