import express from "express"
import cors from "cors"
import { ExpressAuth } from "@auth/express"
import Google from '@auth/express/providers/google'
import Nodemailer from '@auth/express/providers/nodemailer'

 
const app= express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.urlencoded({extended:true, limit:"16kb"}))

app.use(express.static("public"))

app.set('trust proxy', true)
app.use("/auth/*", ExpressAuth({ providers: [ Google ,Nodemailer] }))




export {app}