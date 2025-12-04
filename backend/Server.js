import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import UserRoutes from "./routes/UserRoute.js";
import AuthRoutes from "./routes/AuthRoute.js";

// Initialize Express App
const app = express();

// Middleware
app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());


// Routes
app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);

await connectDB(); // MongoDB connect

// Main function 


  try {

   
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1); // Exit with failure
  }



export default app
