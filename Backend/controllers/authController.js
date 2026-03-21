import {User, User} from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req,res)=>{
    const{fullname,email,password} = req.body
    try {
        if(!fullname || !password || !email ){

            return res.status(400).json({
                message:"all fields are required",
                success : true,

            })
        }
        const user = await User.findOne({email})
        if(user){

            return res.status(400).json({
                message: " email already in use",
                success: false,

            })      
        
    } 
   const hashedPassword = await bcrypt.hash(password,10)
    await usercreate ({
        email,
        fullname,
        password:hashedPassword,

    })
    return res.status(201).json({

        message:"account created successfully",
        success:true,


    })

    }
    catch(error){

        console.log("user is wrong")
    }

     const login = async(req,res)=>{
        const {email,password} = req.body
        try {
            if(!email|| !password){

                return res.status(400).json({
                    message:"all fields are required",
                    success:false,
                })

            }
            
            const user = await user.findOne({email})
            if(!user){

                return res.status(400).json({
                    message:"incorrect email or password",
                    success:true,
                })


            }

            const isPasswordMatch = await bcrypt.compare(password,user.password)
            if(!isPasswordMatch){


                res.status(400).json({
                    message:"incorrect password",
                    success:false

                })
            }

        } catch (error) {
            console.log(error)
        }



    }


    



}
