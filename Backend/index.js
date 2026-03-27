import express from "express";
import cookieParser from "cookie-parser";
import cors from"cors";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import userRoute from "./Routes/authRoutes.js"


dotenv.config();


const app = express();
const PORT =8000;


///middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//routes
app.use("/api/v1/user",userRoute);

// server working 
app.listen(PORT ,()=>{
    //connects to the database 
 connectDB();
console.log(`Server is listening at ${PORT}`);


})