const mongoose=require("mongoose");
const initdata=require("./data.js");
const Product=require("../models/product.js");

const MONGO_URL = "mongodb+srv://varunp5324:meyJXaruYXxjvogI@e-commerce.rb1rm.mongodb.net/?retryWrites=true&w=majority&appName=E-commerce";
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
    initdata.data = initdata.data.map((obj) => ({...obj, owner: '66e07315f44f5230c950b942'}));
    await Product.insertMany(initdata.data)
    console.log("data initialized");
}
initDB();