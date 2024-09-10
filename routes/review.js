const express = require("express");
const router=express.Router({mergeParams: true});

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { productSchema } = require("../schema.js")
const { reviewSchema } = require("../schema.js")
const Product = require("../models/product.js")
const Review = require("../models/review.js")
const {isLoggedIn, isOwner, isreviewOwner, validateproduct, validatereview}=require("../middleware.js");


//post route
router.post("/",isLoggedIn, validatereview, wrapAsync(async (req, res) => {
    const product = await Product.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author=req.user._id
    product.reviews.push(newReview);
    await newReview.save();
    await product.save();
    req.flash("success","Review Created");
    res.redirect(`/products/${product._id}`);
}))

//delete route
router.delete("/:reviewId",isLoggedIn,isreviewOwner, wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");
    res.redirect(`/products/${id}`);
}))

module.exports=router;