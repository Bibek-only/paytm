import {signinSchema} from "../models/zodSchemas.validation.js"
import User from "../models/User.model.js"
export async function checkUserInDbForSignin(req,res,next){
    const body = req.body;
    
    // zod schema for input validation
    const isValid = signinSchema.safeParse(req.body);
    if(! isValid){
        res.json({
            success: false,
            data: "the inputs are invalid"
        })
        return
    }

    // logic to check the user already exist on the database or not
    const userInfo = req.body;

    
    
    
    if(! await User.findOne(userInfo)){
        
        
        res.status(400).json({
            msg: "no user exist or you are using a wrong password try again"
        })
        return
    }
    

    
    next()

}