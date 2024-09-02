import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../constants.js"

export  function authMiddleware(req,res,next){
    
    const authHeader = req.headers.authorization;
    
    // validating is there any header carray a Bearer token or not
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(400).json({
            status: 404,
            msg:"The user is not authorized for the request",
        })
        return;
    }

    // extract the token
    const token = authHeader.split(' ')[1];
    try{    
            // decode or extract value from the token
            const tokenValue = jwt.verify(token, JWT_SECRET);
          
            // extract the user id for further use like get userinfo or account info
            let userId = tokenValue.id;
            
            let userInfo = {userName: tokenValue.userName, firstName: tokenValue.firstName, lastName: tokenValue.lastName, balance: tokenValue.balance}
           
            // add the userid in the request object for further use
            req.userId = userId;
            req.userInfo = userInfo;
            next()
            

    }catch(err){
        res.status(404).json({
            status: 404,
            msg: "some eror in auth middleware",
            error: err
        })
    }
}





   