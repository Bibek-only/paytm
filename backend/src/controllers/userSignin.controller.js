import User from "../models/User.model.js"
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../constants.js"

export async function userSignin(req,res,next){
    const userInfo = req.body;
    const user = await User.findOne(userInfo);
    
    // create the jwt token
    const userId = user._id;
    const firstName = user.firstName;
    const lastName = user.lastName;
    const userName = user.userName.split('@')[0];
    const token = jwt.sign({
            id: userId,
            userName: userName,
            firstName: firstName,
            lastName: lastName
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