const jwt = require("jsonwebtoken")

module.exports = (req, res, next)=>{
    let Token = req.headers['token']

    jwt.verify(Token, process.env.JWT_SECRET, (err, decode)=>{
        if(err){
            res.status(401).json({status: "unauthorized"})
        }else{
            let email = decode['data']
            req.headers.email = email
            next()
        }
    })
}