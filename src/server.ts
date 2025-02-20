import { app } from "./app";
import connectDB from "./db/dbConnect"; //always import with full file name along with its extention


connectDB()// we prvovide a prmoise after connectDB to connect to epress
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!!", err)
})