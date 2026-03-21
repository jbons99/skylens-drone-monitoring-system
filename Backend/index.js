import express from "express";
import cookieParser from "cookie-parser";
import cors from"cors";
import connectDB from "./database/db.js";
import dotenv from "dotenv";


dotenv.config();


const app = express();
const PORT =8000;



// server working 
app.listen(PORT ,()=>{
    //connects to the database 
 connectDB();
console.log(`Server is listening at ${PORT}`);


})