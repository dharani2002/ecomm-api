import mongoose, {Schema,Document} from "mongoose";
import { User } from "./User.model";
import { Product } from "./Product.model";

export interface Item extends Document{
    product:Product,
    quantity:Number,
}

export interface Order extends Document{
    user:User;
    payment_status:"PENDING"|"PROCESSING"|"COMPLETED"|"CANCELLED";
    payment_method:string;
    order_items:Item
    total_amount:number;
    billing_address:string;
    created_at:Date
    updated_at:Date
}

export const orderItemSchema = new Schema({
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      default:1
    },
  });

const orderSchema=new Schema<Order>({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    order_items:[orderItemSchema],
    payment_status:{
        type:String,
        enum:["PENDING","PROCESSING","COMPLETED","CANCELLED"],
        default:"PENDING"
    },
    total_amount:{
        type:Number,
    },
    billing_address:{
        type:String
    },
},{timestamps:true})
export const orderModel = mongoose.model<Order>('Order', orderSchema);
