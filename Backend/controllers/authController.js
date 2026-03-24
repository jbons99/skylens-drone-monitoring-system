    import User from "../models/user.model.js";
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
    }


     export const login = async(req,res)=>{
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
            };


            
            const tokenData={
                userId: User._id
            }

            const token= await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"1D"});
            return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpOnly:true,sameSite:'strict'}).json({
                message:`welcome Back ${user.fullName}`,
                user:{
                 _id:User._id,
                 fullName:User.fullName,
                 email:User.email

                },
                success: true


            })

        } catch (error) {
            console.log(error)

            return res.status(500).json({
                message:error.message,
                success:false
        });   
    }
     }
    
    //
   export const logout =async (req,res)=>{

        try {
            return res (200).cookie
            ("token","",{masAge:0}).json({
                message:`${User.fullName} looges out`,
                success: true
            })
        } catch (error) {
            console.log(error)
            return res(400).json({
                message:error.message,
                success:false
            })
        }
   }