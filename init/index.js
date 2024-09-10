const mongoose=require("mongoose");
const initdata=require("./data.js");
const Product=require("../models/product.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/ECommerce";
main().then(() => {
    console.log("connected to DB");
})
    .catch(err => {
        console.log(err);
    })
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB=async ()=>{
    await Product.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({...obj, owner: '66d6ae476102d60177fefaaa'}));
    await Product.insertMany(initdata.data)
    console.log("data initialized");
}
initDB();