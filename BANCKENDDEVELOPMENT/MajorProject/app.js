const express=require("express");
const app=express();

const port=8080;
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// index route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  });

  /* app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("successful testing");
});
 */
app.get("/",(req,res)=>{
    res.send("Working Well go Ahead")
})

app.listen(port,()=>{
    console.log("Listining On The port :8080")
});