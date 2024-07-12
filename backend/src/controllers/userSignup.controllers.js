import User from "../models/User.model.js"
export const userSignup = async (req,res,next) =>{
       
        // logic to sing up or register a user
        await User.create(req.body);
        res.send("user created sucessfully")
        
}