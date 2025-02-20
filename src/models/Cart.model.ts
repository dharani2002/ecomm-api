import mongoose, {Schema,Document} from "mongoose";
import { User } from "./User.model";
import { Item, orderItemSchema } from "./Order.model";

export interface Cart extends Document{
    user:User
    item:Item
    created_at:Date
    updated_at:Date
}

const cartSchema =new Schema<Cart>({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    item:[orderItemSchema],
},{timestamps:true})

export const cartModel=mongoose.model<Cart>("Cart",cartSchema)