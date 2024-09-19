import mongoose from "mongoose";
import { optional } from "zod";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true 
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        default: ""
    },
    password:{
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema);
export default User;
