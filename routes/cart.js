const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { productSchema } = require("../schema.js")
const { reviewSchema } = require("../schema.js")
const Product = require("../models/product.js")
const User = require("../models/user.js");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const { isLoggedIn, isOwner, validateproduct } = require("../middleware.js");

///////////////////////////////////////CART

//display cart
router.get("/cart/:Uid", isLoggedIn, wrapAsync(async (req, res) => {
    let { Uid } = req.params;
    const user = await User.findById(Uid).populate("cart");
    // const product = await Product.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!user || !user.cart) {
       req.flash("error", "not found");
        res.redirect(`/products`);
    }
    const cartLength = user.cart.length;
    console.log("Length of the cart:", cartLength);
    // res.send(user.cart);
    let cartItems=user.cart;
    let total=0;
    for(const item of cartItems){
        total=total+item.price;
    }
    res.render("products/cart.ejs", {cartItems, total,cartLength});
}
))

//add to cart
router.put("/:Pid/cart/:Uid", isLoggedIn, wrapAsync(async (req, res) => {
    let { Pid, Uid } = req.params;
    const user = await User.findById(Uid);
    if (!user) {
        req.flash("error", "something went wrong");
        res.redirect(`/products/${Pid}`);
    }
    user.cart.push(Pid);
    await user.save();
    req.flash("success", "Product Added");
    res.redirect(`/products/${Pid}`);
}))



module.exports=router;