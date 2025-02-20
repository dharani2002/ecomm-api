import mongoose, {Schema,Document} from "mongoose";

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    contact:string;
    isVerified:boolean;
    address:string[],
    avatar:string,
    prime_user:boolean,
    created_at:Date,
    updatedA_at:Date,
}

const userSchema: Schema<User>=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    contact:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:[
        {
        type:String,
        required:true
        }
    ],
    isVerified:{
        type:Boolean,
        default:false,
    },
    avatar:{
        type:String
    },
    prime_user:{
        type:Boolean,
    }
},{timestamps:true})

export const userModel=mongoose.model<User>("User",userSchema)

