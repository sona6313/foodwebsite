const dataBase = require('./db')
const jwt = require('jsonwebtoken')
const expess= require('express')
const register = (name, place, email, password, phone) => {
    return dataBase.User.findOne({ email: email }).then(user => {
        if (user) {
            return {
                statusCode: 422,
                status: false,
                message: "email id already exist"
            }
        }
        else {
            const newUser = new dataBase.User({
                name: name,
                phone: phone,
                email:email,
                password:password,
                place:place
            })
            newUser.save()
            const token = jwt.sign({
                email: email
            }, 'supersecretkey@123')
            return {
                statusCode: 200,
                status: true,
                message: "registered successfully",
                token,
                email
            }
        }
    })
}

const login = ( email, password ) => {
    return dataBase.login.findOne({ email: email , password:password}).then(user => {
        if (user) {
            return {
                statusCode: 422,
                status: false,
                message: "email id already exist"
            }
        }
        else {
            const newUser = new dataBase.login({
               
                email:email,
                password:password
            
            })
            newUser.save()
            const token = jwt.sign({
            
                email: email
            } ,'supersecretkey@123')
            return {
                statusCode: 200,
                status: true,
                message: "registered successfully",
                token,
                 email
                }
            }
        })
    }
    
    

module.exports = { register ,login }
