const mongoose = require("mongoose");

mongoose.cartSchema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true 
    },
    price:{
        type:String,
        required:true 
    },
    imgUrl:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Cart",cartSchema)