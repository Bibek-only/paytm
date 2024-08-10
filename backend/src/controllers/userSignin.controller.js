import User from "../models/User.model.js"
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../constants.js"

export async function userSignin(req,res,next){
    const userInfo = req.body;
    const user = await User.findOne(userInfo);
    
    // create the jwt token
    const userId = user._id; 
    const token = jwt.sign({
            id: userId
    },JWT_SECRET);

    // add the token in the headers authorization for authenticate request purpose
    // it is used by the authMiddleware (may neaded or not)
    req.headers.authorization = 'Bearer '+token;
    
    res.status(200).json({
        staus: 200,
        msg: "user signin sucessfully",
        data: {
            token: token
        }
    })
   

}