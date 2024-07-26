import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../constants.js"

export  function authMiddleware(req,res,next){
    
    const authHeader = req.headers.authorization;
    
    // validating is there any header carray a Bearer token or not
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(404).json({msg: "user is not authorized for the operation"})
        return;
    }

    // extract the token
    const token = authHeader.split(' ')[1];
    try{    
            // decode or extract value from the token
            const tokenValue = jwt.verify(token, JWT_SECRET);
          
            let userId = tokenValue.id;
           
            // add the userid in the request object for further use
            req.userId = userId;
            next()
            

    }catch(err){
        res.status(404).json({
            msg: "some eror in auth middleware",
            error: err
        })
    }
}





   