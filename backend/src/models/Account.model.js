import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    userId: {
        // referenc to the users object id (from User table)
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

export default Account = mongoose.model("Account", accountSchema);