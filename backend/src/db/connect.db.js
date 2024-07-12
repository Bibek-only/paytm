import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        let dbInstance = await mongoose.connect("mongodb://localhost:27017/paytm");
    } catch (error) {
        console.log("some error occure in db connection")
    }
}

export default connectDB;