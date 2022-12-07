const express = require('express')
const registerServicer=require('./services/register')
const cors=require('cors')
const dataservice =require('./services/addcart')

const app=express()

app.use(cors({
    origin:'http://localhost:4200'
}))
app.use(express.json())

app.post('/register',(req,res)=>{
    console.log(req.body)
    registerServicer.register(req.body.name, req.body.place, req.body.email, req.body.password, req.body.phone)
    .then(result => {
        res.status(result.statusCode).json(result)
    })
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    registerServicer.login( req.body.email, req.body.password)
    .then(result => {
        res.status(result.statusCode).json(result)
    })
})

// cart route
const cartRoute =require("./routes/cartRoutess")
app.use('/api',cartRoute)


// app.post('/addcart',(req,res)=>{
//     console.log(req.body)
//     dataservice.Cart(,)
//     .then(result => {
//         res.status(result.statusCode).json(result)
//     })
// })

app.listen(3080)



