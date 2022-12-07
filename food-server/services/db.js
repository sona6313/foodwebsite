const mongoose =require('mongoose');
 mongoose.connect('mongodb://localhost:27017/FOOD',{
    useNewUrlParser:true
 })

 //model creation
 const User=mongoose.model('User',{
    name:String,
    phone:String,
    email:String,
    password:String,
    place:String
 })

 const Cart=mongoose.model('Cart',{
   id:String,
   name:String,
   price:String,
   imgUrl:{type:String}
})


const login=mongoose.model('login',{
   
   email:String,
   password:String

})



//  const cart=mongoose.Model(

//  )
 module.exports={User,Cart, login}