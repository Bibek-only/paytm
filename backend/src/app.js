import express from "express"
import userRouter from "./routes/User.route.js"
const app = express();
app.use(express.json())
app.use("/api/v1/user",userRouter);

export default app