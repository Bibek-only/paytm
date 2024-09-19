import mongoose from "mongoose";
const connectDB = async () => {
  try {
    let dbInstance = await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    console.log("some error occure in db connection");
  }
};

export default connectDB;
