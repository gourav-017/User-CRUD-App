import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import UserRoutes from "./routes/UserRoute.js";

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/users", UserRoutes);


// Main function 
const start = async () => {
  try {

    await connectDB(); // MongoDB connect
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1); // Exit with failure
  }
};
start();
