import User from "../models/User.model.js"
import Account from "../models/Account.model.js"
import jwt from "jsonwebtoken";

export const userSignup = async (req,res,next) =>{
        
        // logic to sing up or register a user
        const user =  await User.create(req.body)
       const userId = user._id;
       const userName = user.userName.split('@')[0];
       const firstName = user.firstName;
       const lastName = user.lastName; 
       
       // initialize a random balance to the user between 1000-10000 
       const userBalance = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
       const newAccount = await Account.create({
        userId: userId, 
        balance:userBalance
       })

       
       
       // create the jwt token
        const token = jwt.sign({
                id: user._id,
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
                
        },process.env.JWT_SECRET)

        // send the response with status code
        res.json({
                status: 200,
                msg: "User created sucussefuly",
                data: {token}
        })
        
}