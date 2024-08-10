export async function getUserInfo(req,res,next){
    //send the user info in request
    res.status(200).json({
        status: 200,
        msg: "find the signedin user information",
        data: req.userInfo
    })    
    
}
