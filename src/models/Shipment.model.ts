import mongoose, {Schema,Document} from "mongoose";
import { Order } from "./Order.model";
import { User } from "./User.model";

export interface Shipment extends Document {
    order:Order;
    shipping_status:"DISPATCHED"|"DELIVERED"|"PENDING"
    delivery_partner_contact:string,
    delivery_otp:string,
    shipping_costs:number,
    delivery_date:Date,
    status_log:string[],
    user:User,
    created_at:Date,
    updated_at:Date
}

const shipmentSchema=new Schema<Shipment>({
   order:{
    type:Schema.Types.ObjectId,
    ref:"Order",
   },
   user:{
    type:Schema.Types.ObjectId,
    ref:"User",
   },
   shipping_status:{
    type:String,
    enum:["DISPATCHED","DELIVERED","PENDING"],
    default:"PENDING"
   },
   delivery_otp:{
    type:String,
   },
   shipping_costs:{
    type:Number
   },
   delivery_date:{
    type:Date
   },
   status_log:[
    {
        type:String
    }
   ]
},{timestamps:true})

export const shipmentModel=mongoose.model<Shipment>("Shipment",shipmentSchema)

