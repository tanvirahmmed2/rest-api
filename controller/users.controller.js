let users = require("../model/users.model")
const { v4: uuidv4 } = require('uuid')


exports.getUsers = (req, res) => {
    res.status(200).json({ users })
}
exports.createtUser = (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const newUser = {
        id: uuidv4(),
        username,
        email
    }
    users.push(newUser)

    res.status(200).json({ users })

}



//update user
exports.updateUser = (req, res) => {
    const userid = req.params.id
    const { username, email } = req.body;
    users
        .filter((user) =>user.id === userid
            .map((selecteduser) => { selecteduser.username = username, selecteduser.email = email })
        )

    res.status(200).json(users)

}


//delete user
exports.deleteUser = (req, res) => {
    const userid = req.params.id
    users=  users.filter((user)=> user.id !==  userid)

    
    res.status(200).json(users)

}