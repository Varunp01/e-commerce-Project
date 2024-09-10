const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { productSchema } = require("../schema.js")
const { reviewSchema } = require("../schema.js")
const Product = require("../models/product.js")
const User = require("../models/user.js")
const { isLoggedIn, isOwner, validateproduct } = require("../middleware.js");

const multer  = require('multer')
const {storage}=require("../cloudconfig.js");
const upload = multer({ storage });
// const upload = multer({ dest: 'uploads/' })


//index route
router.get("/", wrapAsync(async (req, res) => {
    const allproducts = await Product.find({});
    res.render("products/index.ejs", { allproducts });
}))

//new route
//form for new
router.get("/new", isLoggedIn, (req, res) => {
    res.render("products/new.ejs");
})
//submit form for new
router.post("/", isLoggedIn,upload.single("product[image]"),  validateproduct, wrapAsync(async (req, res, next) => {
    let url= req.file.path;
    let filename=req.file.filename;
    let product = req.body;
    console.log(product.product);
    const newproduct = new Product(product.product);
    newproduct.owner = req.user._id;
    newproduct.image={url, filename};
    await newproduct.save();
    req.flash("success", "New product created");
    res.redirect("/products");
}
))

//Edit route
//form for editing
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        req.flash("error", "Product not found");
        res.redirect(`/products`);
    }
    res.render("products/edit.ejs", { product });
}))
//updating route
router.put("/:id", isLoggedIn, isOwner,upload.single("product[image]"), validateproduct, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let updatingproduct=await Product.findByIdAndUpdate(id, { ...req.body.product });

    if(typeof req.file !== "undefined"){
    let url= req.file.path;
    let filename=req.file.filename;
    updatingproduct.image={url, filename};
    await updatingproduct.save();   
    }

    req.flash("success", "Product details Updated");
    res.redirect(`/products/${id}`);
    console.log(req.body.product);
}))

//delete route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let Deleted = await Product.findByIdAndDelete(id);
    console.log("Deleted ", Deleted);
    req.flash("success", "Product deleted");
    res.redirect(`/products`);

}))

//show route
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!product) {
        req.flash("error", "Product not found");
        res.redirect(`/products`);
    }
    res.render("products/show.ejs", { product });
}))


module.exports = router;