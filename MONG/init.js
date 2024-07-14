const mongoose = require('mongoose');
const Chat=require("./model/chat")

main().then((res)=>{
    console.log("Connection Was Successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

  
}
let chats=[{
    form:"shubhma",
    to:"ashwini",
    msg:"Love you Ashu",
    created_at:new Date()
},
{
    form:"ashwini",
    to:"shubham",
    msg:"Love you shubu",
    created_at:new Date()
},
{
    form:"shubhma",
    to:"Nikita",
    msg:"Love you Niku",
    created_at:new Date()
},
{
    form:"Nikita",
    to:"Shubham",
    msg:"Love you Shubzz",
    created_at:new Date()
},
]
Chat.insertMany(chats)

