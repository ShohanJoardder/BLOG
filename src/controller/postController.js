const postModel = require("../models/postModel");

// Post Create
exports.createPost = (req, res)=>{
    let reqBody = req.body;

    postModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}


// Post Read
exports.readPost = (req, res)=>{
    postModel.find((err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}


// Update Post
exports.updatePost = (req, res)=>{
    let id = req.params.id
    let Query = {_id: id}
    let reqBody = req.body;

    postModel.updateOne(Query, reqBody, (err,data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}


// Delete Post
exports.deletePost = (req, res)=>{
    let id = req.params.id
    let Query = {_id: id}

    postModel.remove(Query, (err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}