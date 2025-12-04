import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: Number,
    email: { type: String, required: true, unique: true },
    password: { type: String }, // optional so existing CRUD still works
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
