const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")


// User Registration
exports.registration = (req, res)=>{
    let reqBody = req.body;

    userModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }else{
            res.status(200).json({status: "success", data: data})
        }
    })
}


// User Login
exports.login = (req, res)=>{
    let reqBody = req.body
    let email = reqBody["email"]
    let password = reqBody["password"]

    userModel.find({email: email, password: password}, (err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }else{
            if(data.length>0){
                // Authentication Token
                let payload = {
                    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                    data: data[0]["email"]
                }
                let token = jwt.sign(payload, process.env.JWT_SECRET);
                res.status(200).json({status: "success", token:token, data: data[0]})
            }
        }
    })
}