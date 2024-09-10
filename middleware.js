const Review = require("./models/review.js")
const Product = require("./models/product.js")
const ExpressError = require("./utils/ExpressError.js");
const { productSchema } = require("./schema.js")
const { reviewSchema } = require("./schema.js")

module.exports.isLoggedIn =async (req, res, next) => {
    // let { Uid } = req.params;
    // const user = await User.findById(Uid).populate("cart");
    // if (user.cart) {
    //     const cartLength = user.cart.length;
    //     localStorage.setItem('cartLength', cartLength);
    //     console.log("Length of the cart:", cartLength);
    // }

    if (!req.isAuthenticated()) {
        //redirect url saving
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "log in to create");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    if (!product.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You dont have permission");
        return res.redirect(`/products/${id}`);
    }
    next();
}

module.exports.isreviewOwner = async (req, res, next) => {
    let { id,reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You dont have permission");
        return res.redirect(`/products/${id}`);
    }
    next();
}

//fn for validating product schema
module.exports.validateproduct = (req, res, next) => {
    let { error } = productSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

//fn for validating review schema
module.exports.validatereview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}
