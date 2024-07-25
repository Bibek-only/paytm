import app from "../app.js";
import { Router } from "express";
import { userSignup, userSignin } from "../controllers/exportControllers.js";
import { checkUserInDb , checkUserInDbForSignin} from "../middlewares/exportMiddlewares.js"
const userRouter = Router()

// add the middleware and the controller for validation and sign up proccess
userRouter.route("/signup").post(checkUserInDb,userSignup)

// add the middleware and the controller for validation and sign in proccess
userRouter.route("/signin").get(checkUserInDbForSignin,userSignin)

export default userRouter
