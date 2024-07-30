import app from "./app.js"
import connectDB from "./db/connect.db.js"

connectDB() // function to connect the mongodb database
.then((res)=>{
    app.listen(3000,()=>{
        console.log("the port is listen at-> http://localhost:3000/")
    })
})
.catch((error)=>{
    console.log("soem errorn in connnecting the mongodb database")
})