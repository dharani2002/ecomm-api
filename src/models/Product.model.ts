import mongoose, {Schema,Document} from "mongoose";
import { Item } from "./Order.model";

interface Category extends Document{
    name:string,
    parent:Category,
    created_at:Date,
    updated_at:Date
}

export interface Product extends Document{
    title:string,
    category:Category,
    sub_category:Category,
    brand:string,
    description:string,
    price:number,
    discount:number,
    exchangeable: boolean,
    totalSale:number,
    product_details:string[],
    created_at:Date,
    updated_at:Date,
    rating_count: number,
    rating_average:number,
    store:string,
    tags:string[]
}

export interface Inventory extends Document{
    product:Product,
    quantity:number,
    created_at:Date,
    updated_at:Date,
}

const productSchema=new Schema<Product>({
    title:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    exchangeable:{
        type:Boolean,
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
    },
    totalSale:{
        type:Number
    },
    product_details:[
        {
            type:String,
        }
    ],
    tags:[
        {
            type:String,
        }
    ],
    rating_count:{
        type:Number
    },
    rating_average:{
        type:Number
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    sub_category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    store:{
        type:String
    }
},{timestamps:true})

const categorySchema=new Schema<Category>({
    name:{
        type:String,
        required:true
    },
    parent:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    }
})

const inventorySchema=new Schema<Inventory>({
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number
    }
},{timestamps:true})


export const productModel=mongoose.model<Product>("Product",productSchema)
export const categoryModel=mongoose.model<Category>("Category",categorySchema)
export const inventoryModel=mongoose.model<Inventory>("Inventory",inventorySchema)