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

//fn for validating review schema
const validatereview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

//get signUp form
router.get("/signup", (req, res) => {
    res.render("users/signUp.ejs");
})
//submit form
router.post("/signup", wrapAsync( async (req, res) => {
    try {
        let { email, username, password } = req.body;
        const newuser=new User({email, username});
        const registeredUser=await User.register(newuser, password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","user registered");
            res.redirect("/products");             
        })
    } catch (err) {
        req.flash("error",err.message);
        res.redirect("/signup");
    }
}))

//get login form
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
})
//submit form
router.post("/login",saveRedirectUrl,passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), wrapAsync( async (req, res) => {
        req.flash("success","welcome");
        let redirectUrl=res.locals.redirectUrl || "/products";
        res.redirect(redirectUrl);
    }
))

//logout
router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if (err) {
            return next(err);
        } else {
            req.flash("success", "you are logged out now");
            res.redirect("/products");
        }
    })
})

module.exports=router;