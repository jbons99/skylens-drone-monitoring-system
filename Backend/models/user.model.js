import mongoose  from "mongoose";

const  Userschema =  new mongoose.schema({

    fullname:{
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

export const User = mongoose.model("USer",Userschema);




