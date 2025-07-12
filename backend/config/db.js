import mongoose from "mongoose";


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern-crud");
    console.log("MongoDB connected");


  } catch (err) {
    console.error("MongoDB connection failed:", err.message);

    process.exit(1); // Exit with failure
  }
};

export default connectDB;
