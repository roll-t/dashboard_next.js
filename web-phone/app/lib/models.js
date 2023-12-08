import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        min:1,
        max:30
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    },
    phone:{
        type:String
    },
    createdAt:{
        type:String
    }
    ,
    address:{
        type:String
    }
},
{timestamps:true}
)


const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    des:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    stock:{
        type:Number,
        required:true,
        min:0
    },
    img:{
        type:String,
    },
    color:{
        type:String
    },
    size:{
        type:String
    }
},
{timestamps:true}
)


export const User=mongoose.models.User || mongoose.model('User',userSchema)
export const Products=mongoose.models.Products || mongoose.model('Products',productSchema)