const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")
const postController = require("../controller/postController")
const auth = require("../helper/auth")


// User Route
router.post("/registration", userController.registration)
router.post("/login", userController.login)


// Post Route
router.post("/createPost", auth, postController.createPost)
router.get("/readPost", postController.readPost)
router.post("/updatePost/:id", auth, postController.updatePost)
router.get("/deletePost/:id", auth, postController.deletePost)


module.exports = router;