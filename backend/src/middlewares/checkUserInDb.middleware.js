import {signupSchema} from "../models/zodSchemas.validation.js"
import User from "../models/User.model.js"
export async function checkUserInDb(req,res,next){
    const body = req.body;
    
    // zod schema for input validation
    const isValid = signupSchema.safeParse(req.body);
    if(! isValid){
        res.json({
            success: false,
            data: "the inputs are invalid"
        })
        return
    }

    // logic to check the user already exist on the database or not
    const userName = body.userName;
    if(! await User.findOne({userName: userName})){
        next()
        return
    }

    res.send("the user is already exist try another userName")

}