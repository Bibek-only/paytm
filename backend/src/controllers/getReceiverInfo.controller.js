import User from "../models/User.model.js";
export async function getReceiverInfo(req,res,next){

    if(req.body.receiverId == null || req.body.receiverId == ""){
        res.status(400).json({
            status: 400,
            msg: "some erro in find the receiver info"
        })
        return
    }

    let receiverInfo = await User.findOne({
        _id: req.body.receiverId
    })
    
    

    res.status(200).json({
        status: 200,
        msg: "sucessfully get the receiver user info",
        data: {
            userName: receiverInfo.userName,
            firstName: receiverInfo.firstName,
            lastName: receiverInfo.lastName,
        }
    })
}