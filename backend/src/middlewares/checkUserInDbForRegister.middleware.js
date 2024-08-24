import {signupSchema} from "../models/zodSchemas.validation.js"
import User from "../models/User.model.js"
export async function checkUserInDb(req,res,next){
    const body = req.body;
    //check all datafield is present or not
    if(body.userName == null || body.userName == "" || body.firstName == "" || body.firstName == null || body.password == null || body.password == ""){
        res.status(400).json({
            status: 400,
            msg: "all datafield must required"
        })
        return
    }
    
    // zod schema for input validation
    const isValid = signupSchema.safeParse(req.body);
    
    if(! isValid.success){
        res.status(400).json({
            msg: "the input validation is not satisfied"
        })
        return
    }

    // logic to check the user already exist on the database or not
    const userName = body.userName;
    if(! await User.findOne({userName: userName})){
        next()
        return
    }

    

    res.status(400).json({
        msg:  "the email is already taken try another one"
    })

}