// this end point need the authorization token of the current logedin user and then it return the payment history of the the logdin user

import PaymentHistory from "../models/PaymentHistory.model.js"
import User from "../models/User.model.js"
export async function getPaymentHistory(req,res,next){
    
    const paymentHistoryId = await PaymentHistory.find({
        $or: [{senderId: req.userId},{receiverId: req.userId}]

    })

    let paymentHistoryInfos = [];
    
    for (const e of paymentHistoryId) {
        const senderInfo = await User.findOne({_id: e.senderId});
        const receiverInfo = await User.findOne({_id: e.receiverId});
    
        paymentHistoryInfos.push({
            senderName: `${senderInfo.firstName} ${senderInfo.lastName}`,
            senderEmail: `${senderInfo.userName}`,
            receiverName: `${receiverInfo.firstName} ${receiverInfo.lastName}`,
            receiverEmail: `${receiverInfo.userName}`,
            amount: `${e.amount}`,
            time: `${e.createdAt}`
        });
    }
    
    
    res.status(200).json({
        status: 200,
        msg: "sucessfully find the payment history",
        data: paymentHistoryInfos
    })

    
    
}