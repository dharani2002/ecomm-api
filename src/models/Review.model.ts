import mongoose, {Schema,Document} from "mongoose";
import { Product } from "./Product.model";
import { User } from "./User.model";



interface Review extends Document{
    content:string,
    rating:1|2|3|4|5
    product:Product,
    image:string
    verified_purchase:Boolean,
    user:User
    created_at:Date,
    updated_at:Date
}

const reviewSchema=new Schema<Review>({
    content:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    image:{
        type:String
    },
    verified_purchase:{
        type:Boolean,
        default:false
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    }
},{timestamps:true})

export const reviewModel=mongoose.model<Review>("Review",reviewSchema)