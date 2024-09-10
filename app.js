require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
let ejsMate = require('ejs-mate');
const ExpressError = require("./utils/ExpressError.js");
const Product = require("./models/product.js")
const Review = require("./models/review.js")
const User = require("./models/user.js")
const wrapAsync = require("./utils/wrapAsync.js");
const { productSchema } = require("./schema.js")
const { reviewSchema } = require("./schema.js")
const productsRouter=require("./routes/products.js");
const reviewsRouter=require("./routes/review.js");
const navsRouter=require("./routes/navbar.js");
const cartRouter=require("./routes/cart.js");
const userRouter=require("./routes/user.js");
const MongoStore = require('connect-mongo');
const session = require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");


// const MONGO_URL = "mongodb://127.0.0.1:27017/ECommerce";
const MONGO_URL = process.env.ATLAS_DB_URL;
main().then(() => {
    console.log("connected to DB");
})
    .catch(err => {
        console.log(err);
    })
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);

const store=MongoStore.create({
    mongoUrl: MONGO_URL,
    crypto: {
        secret: process.env.SECRET
    },
    touchAfter: 24 * 60 * 60,
  })

  store.on("error",()=>{
    console.log("Error in mongo session");
  })

const sessionOption={
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialize: true,
    cookie: {
        expires: Date.now()+7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
    }
};

app.use(session(sessionOption));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", (req, res) => {
    res.send("hi");
});

app.use((req, res, next) => {
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})

//Routes for Cart
app.use("/cart",cartRouter);
//Routes for Navbar
app.use("/nav",navsRouter);
//product routes
app.use("/products",productsRouter);
//Reviews
app.use("/products/:id/review",reviewsRouter);
//
app.use("/",userRouter);

//if page is not found
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"))
})

//Error handling for database validation
app.use((err, req, res, next) => {
    let { status, message = "something went wrong" } = err;
    // res.status(status).send(message);
    res.render("error.ejs", { err });
})

app.listen(8080, () => {
    console.log("app is listening on 8080");
})