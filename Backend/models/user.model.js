import mongoose  from "mongoose";

const  Userschema =  new mongoose.Schema({

    fullName:{
        type:String,
        required: true

    },

    email:{
        type:String,
        required: true
    },

    password:{
        type: String,
        required: true
    }





} ,{timestamps: true})

 const User = mongoose.model("User",Userschema);


export default User;

