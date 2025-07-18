const express= require("express")
const cors= require("cors")
const bodyParser= require("body-parser")

const app= express()
//cors
app.use(cors())

//bodyparser
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

const useRouter= require("./routes/users.route")

//use router
app.use("/USERS", useRouter)
//home route

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

//route err
app.use((req,res)=>{
    res.status(404).json({
        message: "Route not found"
    })
})

//server err
app.use((err, req,res, next)=>{
    res.status(500).json({
        message: "Something broke"
    })
})

module.exports= app