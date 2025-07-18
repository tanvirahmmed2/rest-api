const app = require("./app")







require("dotenv").config()

const PORT= process.env.PORT || 5000





app.listen(PORT,()=>{
    console.log("Helllo")
    console.log(`Server is running at http://localhost:${PORT}`)
})
