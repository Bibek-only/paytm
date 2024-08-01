/*
note
the request body must contain 2 key
"userId" -> it have the _id of the receiver user
"amount" -> it contai the amount need to transfer
in header authorization send the sender jwt token with Bearer
*/
//-----------> have some issue in code not fixed yet
import mongoose from "mongoose";
import Account from "../models/Account.model.js";
import User from "../models/User.model.js";

export async function doTransferMoney(req,res,next){
    // creating the session
    const session = await mongoose.startSession(); 

    // start the transation process
    session.startTransaction();

    
    const senderUserInfo = await User.findOne({_id: req.userId}).session()
    const receiverUserInfo = await User.findOne({_id:req.body.userId}).session()
    const amount = req.body.amount;

    const senderAccountInfo = await Account.findOne({userId: senderUserInfo._id}).session()
    const receiverAccountInfo = await Account.findOne({userId: req.body.userId}).session()
    

    // check the sender account info
     if(! senderUserInfo || senderAccountInfo.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                    message: "insufficent balance"
                })
                
             }
    
    
    // check the receiver account info        
    if(! receiverUserInfo){
        await session.abortTransaction();
        return res.status(400).json({
        message: "no receiver found"
        })
        
        }

    


     // perform the tranjaction processes
     await Account.updateOne({userId: req.userId},{$inc: {balance: -amount}}).session();
     await Account.updateOne({userId: receiverAccountInfo.userId},{$inc: {balance: amount}}).session();

     // commit the transaction
     await session.commitTransaction();

     res.status(200).json({
        message: "tranjaction sucessful"
     })
}