import app from "../app.js";
import { Router } from "express";
import { userSignup } from "../controllers/exportControllers.js";
import { checkUserInDb } from "../middlewares/exportMiddlewares.js"
const userRouter = Router()

// add the middleware and the controller for validation and sign up proccess
userRouter.route("/signup").post(checkUserInDb,userSignup)

export default userRouter
