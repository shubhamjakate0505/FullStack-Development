const mongoose = require('mongoose');
const {Schema}=mongoose;

main().then(()=>{
    console.log("Connection Succesfully")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}
const orderSchema=new Schema({
    item:String,
    Price:Number
});

const coustomerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order",
        }
    ]
});
    const Order=mongoose.model("order",orderSchema);
const Coustomer=mongoose.model("Coustomer",coustomerSchema);
const AddConst=async()=>{
    let cons1=new Coustomer({
        name:"Rahul Kumar"

    });
    let order1=await Order.findOne({item:"Vadapav"})
    let order2=await Order.findOne({item:"Cachari"})
    cons1.orders.push(order1)
    cons1.orders.push(order2)

    let result=await cons1.save();
    console.log(result)
}



/* const addOrders=async()=>{
  let res=  await Order.insertMany([
        {
        item:"somosa",
        Price:12
        },
        {
            item:"VadaPav",
            Price:15
        },
        {
        item:"Cachari",
        Price:20
        }
    ])
    console.log(res)
} */
AddConst()
// addOrders();
