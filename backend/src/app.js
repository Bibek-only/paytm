import express from "express"
import userRouter from "./routes/User.route.js"
import accoutnRouter from "./routes/Account.route.js"
const app = express();

app.use(express.json()) // middle wares to parse the body

app.use("/api/v1/user",userRouter); // setup routes for all user endpoint
app.use("/api/v1/account",accoutnRouter); // setup routes for all account endpoint


export default app