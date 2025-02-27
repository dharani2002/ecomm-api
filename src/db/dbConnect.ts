import mongoose from "mongoose";
import "dotenv/config"
import { DB_NAME } from "../constants";

const connectDB=async () => {
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST:${connectionInstance.connection.host} `);
    } catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1)//refernce to the process the current application is running on.
    }
    
}

export default connectDB