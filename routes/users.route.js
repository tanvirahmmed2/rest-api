const express= require("express")
const { getUsers,  createtUser, updateUser, deleteUser } = require("../controller/users.controller")
const router= express.Router()




//user go
router.get("/", getUsers)
router.post("/", createtUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)




module.exports= router