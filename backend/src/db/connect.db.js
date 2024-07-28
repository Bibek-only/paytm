import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        let dbInstance = await mongoose.connect(DB_NAME);
    } catch (error) {
        console.log("some error occure in db connection")
    }
}

export default connectDB;