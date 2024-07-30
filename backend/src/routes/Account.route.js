import { Router } from "express";
import { findUserBalance } from "../controllers/exportControllers.js";
import { authMiddleware} from "../middlewares/exportMiddlewares.js"
const accoutnRouter = Router();

// set up the account router to get the balance of the user
accoutnRouter.route("/getbalance").get(authMiddleware,findUserBalance)

export default accoutnRouter;