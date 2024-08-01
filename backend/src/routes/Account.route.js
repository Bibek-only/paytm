import { Router } from "express";
import { findUserBalance, doTransferMoney} from "../controllers/exportControllers.js";
import { authMiddleware} from "../middlewares/exportMiddlewares.js"
const accoutnRouter = Router();

// set up the account router to get the balance of the user
accoutnRouter.route("/getbalance").get(authMiddleware,findUserBalance)

// set up the router for transfer of money 
accoutnRouter.route("/transfermoney").put(authMiddleware,doTransferMoney)

export default accoutnRouter;