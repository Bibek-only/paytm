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
import { number } from "zod";
import PaymentHistory from "../models/PaymentHistory.model.js";

export async function doTransferMoney(req,res,next){
    
      
   try {
      // check the amount and the id is contain the value
      if(req.body.userId == "" || req.body.userId == null || req.body.amount == null || req.body.amount == "" ){
         res.status(400).json({
            status: 400,
            msg: "all field must contain value"
         })
         return;
      }


      // creating the session
    const session = await mongoose.startSession(); 

    // start the transation process
    session.startTransaction();

    
    const senderUserInfo = await User.findOne({_id: req.userId}).session()
    const receiverUserInfo = await User.findOne({_id:req.body.userId}).session()
    const amount = Number.parseInt(req.body.amount);
    

    const senderAccountInfo = await Account.findOne({userId: senderUserInfo._id}).session()
    const receiverAccountInfo = await Account.findOne({userId: req.body.userId}).session()
    

    // check the sender account info
     if(! senderUserInfo || senderAccountInfo.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                     status: 400,
                     msg: "insufficent balance"
                })
                
             }
    
    
    // check the receiver account info        
    if(! receiverUserInfo){
        await session.abortTransaction();
        return res.status(400).json({
         status: 400,
         msg: "no receiver found"
        })
        
        }

    


     // perform the tranjaction processes
     await Account.updateOne({userId: req.userId},{$inc: {balance: -amount}}).session();
     await Account.updateOne({userId: receiverAccountInfo.userId},{$inc: {balance: amount}}).session();

     // commit the transaction
     await session.commitTransaction();

     // add the payment history if the transaction is sucessfull
      await PaymentHistory.create({
         senderId: req.userId,
         receiverId: receiverAccountInfo.userId,
         amount: amount
         
      })

     res.status(200).json({
        status: 200,
        msg: "tranjaction sucessful"
     })
      
   } catch (error) {
      res.status(400).json({
         status: 400,
         msg: "some error in transaction"
      })
   }

      
    
}