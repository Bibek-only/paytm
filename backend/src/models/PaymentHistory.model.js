import mongoose from "mongoose"

const paymentHistorySchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    senderName:{
        type: String,
        required: true
    },
    senderUserName:{
        type: String,
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverName:{
        type: String,
        required: true
    },
    receiverUserName:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        default: 0,
        required: true
    }
},{timestamps: true})

const PaymentHistory = mongoose.model("PaymentHistory", paymentHistorySchema)
export default PaymentHistory