const { Cart } = require("../services/db");

const add_to_cart = async(req,res)=>{
 try{
new Cart({
   id: req.body.id,
    imgUrl:req.body.imgUrl,
   name: req.body.name,
    price :req.body.price
})

const cartData = await cart_obj.save();
res.status(200).send({success:true, msg:"Cart product detais", data:cartData})
 }catch (error){
    res.status(400).send({
        success:false, msg:error.message
    });
 }
}

module.exports = {
add_to_cart
}