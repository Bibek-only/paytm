import app from "../app.js";
import { Router } from "express";
import { userSignup, userSignin, userUpdate, findAllUsers } from "../controllers/exportControllers.js";
import { authMiddleware, checkUserInDb , checkUserInDbForSignin} from "../middlewares/exportMiddlewares.js"
const userRouter = Router()

// add the middleware and the controller for validation and sign up proccess
userRouter.route("/signup").post(checkUserInDb,userSignup)

// add the middleware and the controller for validation and sign in proccess
userRouter.route("/signin").get(checkUserInDbForSignin,userSignin)

// add the middleware and the controller for the user information update proccess
userRouter.route("/update").put(authMiddleware,userUpdate)

// add the controller for find all the user from the data base
userRouter.route("/findall").get(findAllUsers);

export default userRouter
