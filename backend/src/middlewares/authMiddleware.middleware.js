import jwt from "jsonwebtoken"
import User from "../models/User.model.js"
export  function authMiddleware(req,res,next){
    
    const authHeader = req.headers.authorization;
    
    // validating is there any header carray a Bearer token or not
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(400).json({
            status: 404,
            msg:"xThe user is not authorized for the request",
        })
        return;
    }

    // extract the token
    const token = authHeader.split(' ')[1];
    try{    
           (async ()=>{
            // decode or extract value from the token
            const tokenValue = jwt.verify(token, process.env.JWT_SECRET);
            let userId = tokenValue.id;
            const userInfoRes = await User.findOne({_id: userId});
            
            let userInfo = {userName: userInfoRes.userName, firstName: userInfoRes.firstName, lastName: userInfoRes.lastName}
          
            
            // add the userid in the request object for further use
            req.userId = userId;
            req.userInfo = userInfo;
            next()
           })();
            

    }catch(err){
        res.status(404).json({
            status: 404,
            msg: "some eror in auth middleware",
            error: err
        })
    }
}





   