import app from "./app.js"
import connectDB from "./db/connect.db.js"



console.log(process.env.PORT)
connectDB() // function to connect the mongodb database
.then((res)=>{
    app.listen(process.env.PORT,()=>{
        console.log(`the port is listen at-> http://localhost:${process.env.PORT}/`)
    })
})
.catch((error)=>{
    console.log("soem errorn in connnecting the mongodb database")
})