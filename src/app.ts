import express from "express"
import cors from "cors"

 
const app= express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.urlencoded({extended:true, limit:"16kb"}))

app.use(express.static("public"))

app.set('trust proxy', true)



export {app}