// this end point need the authorization token of the current logedin user and then it return the payment history of the the logdin user

import PaymentHistory from "../models/PaymentHistory.model.js";
import User from "../models/User.model.js";
export async function getPaymentHistory(req, res, next) {
  const paymentHistory = await PaymentHistory.find({
    $or: [{ senderId: req.userId }, { receiverId: req.userId }],
  });

  let paymentHistoryInfos = [];

  for (const e of paymentHistory) {
    // const senderInfo = await User.findOne({_id: e.senderId});
    // const receiverInfo = await User.findOne({_id: e.receiverId});

    paymentHistoryInfos.push({
      senderName: `${e.senderName}`,
      senderEmail: `${e.senderUserName}`,
      receiverName: `${e.receiverName}`,
      receiverEmail: `${e.receiverUserName}`,
      amount: `${e.amount}`,
      time: `${e.createdAt}`,
    });
  }

  res.status(200).json({
    status: 200,
    msg: "sucessfully find the payment history",
    data: paymentHistoryInfos,
  });
}
