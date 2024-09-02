import User from "../models/User.model.js"
import Account from "../models/Account.model.js"
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../constants.js"

export async function userSignin(req,res,next){
    const userInfo = req.body;
    const user = await User.findOne(userInfo);
    const balance = await Account. findOne({userId: user._id});
    console.log(balance.balance)
    const token = jwt.sign({
            id: user._id,
            userName: user.userName,
            firstName: user.lastName,
            lastName: user.lastName,
            balance: balance.balance
    },JWT_SECRET);

    // add the token in the headers authorization for authenticate request purpose
    // it is used by the authMiddleware (may neaded or not)
    req.headers.authorization = 'Bearer '+token;
    
    res.status(200).json({
        status: 200,
        msg: "user signin sucessfully",
        data: {
            token: token
        }
    })
   

}