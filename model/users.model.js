const {v4: uuidv4}= require('uuid')

const users=[
    {
        id: uuidv4(),
        username: "tanvirahmmed",
        email: "tanvir@gmail.com"
    },
    {
        id: uuidv4(),
        username: "sarazabin",
        email: "sara@gmail.com"
    },
    {
        id: uuidv4(),
        username: "inche",
        email: "inche@gmail.com"
    }
]
module.exports= users