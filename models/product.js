const mongoose = require("mongoose");
const Schema = mongoose.mongoose.Schema;
const Review = require("./review.js");
const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        // type: String,
        // default: "https://i.ibb.co/R351Tcf/logo.png",
        // set: (v) => v === "" ? "https://i.ibb.co/R351Tcf/logo.png" : v,
        url: String,
        filename: String,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

productSchema.post("findOneAndDelete", async (product) => {
    if (product) {
        await Review.deleteMany({ _id: { $in: product.reviews } })
    }
})
const Product = mongoose.model("Product", productSchema);
module.exports = Product;