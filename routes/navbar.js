const express = require("express");
const router=express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Product = require("../models/product.js")

//route for electronics, grooming and food
router.get("/electronics", wrapAsync(async (req, res) => {
    const allproducts = await Product.find({ category: 'electronics' });
    let category = "ELECTRONICS";
    res.render("navbar_routes/category.ejs", { allproducts, category });
}))
router.get("/grooming", wrapAsync(async (req, res) => {
    const allproducts = await Product.find({ category: 'grooming' });
    let category = "GROOMING";
    res.render("navbar_routes/category.ejs", { allproducts, category });
}))
router.get("/food", wrapAsync(async (req, res) => {
    const allproducts = await Product.find({ category: 'food' });
    let category = "FOOD";
    res.render("navbar_routes/category.ejs", { allproducts, category });
}))

module.exports=router;