const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");


module.exports = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if (error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};