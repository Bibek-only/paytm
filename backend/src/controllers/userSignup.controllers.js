import User from "../models/User.model.js"
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../constants.js"
export const userSignup = async (req,res,next) =>{

        // logic to sing up or register a user
       const user =  await User.create(req.body);
       
        // create the jwt token
        const userId = user._id; 
        const token = jwt.sign({
                id: userId
        },JWT_SECRET)

        // send the response with status code
        res.json({
                status: 200,
                msg: "User created sucussefuly",
                data: {token}
        })
        
}