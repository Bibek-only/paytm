import mongoose from "mongoose"

const paymentHistorySchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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