const express=require("express");
const cartRoute=express();
const bodyparser =require("body-parser")
cartRoute.use(bodyparser.json());
cartRoute.use(bodyparser.urlencoded({extended:true}))

const auth = require("../middleware/auth");
cartRoute.post('/addCart',);
const cartcontroler=require('../controller/cartcontroller');
cartRoute.post('/add_to_cart',auth,cartcontroler,cartcontroler.add_to_cart);
module.exports = cartRoute;