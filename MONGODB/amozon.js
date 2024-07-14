const mongoose = require('mongoose');


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amozon');
}
main().then(()=>{
    console.log("connection sucessfully")
})
.catch(err => console.log(err));


const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        // require:true
    },Price:{
        type:Number,
        // require:true
    }

});
const Book=mongoose.model("Book",BookSchema)
const Book1=new Book({
    // title:"Dhehati Ladaka",
    Name:"Bhartiye Shashank",
    Price:220
})
Book1.save()
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

