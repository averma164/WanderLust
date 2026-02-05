//insertion of large data 
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
    .then(() => {
        console.log("Connnsection Successful");
    }).catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
    await Listing.deleteMany({});//if any data is left in the document
    initData.data = initData.data.map((obj) => ({...obj, owner: "697e18ae9e5ca1ef295831c2"}));
    await Listing.insertMany(initData.data);
    console.log("Data was inserted");
};
initDB();