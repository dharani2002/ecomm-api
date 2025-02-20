import { ExpressAuth } from "@auth/express"
import Google from '@auth/express/providers/google'
import Nodemailer from '@auth/express/providers/nodemailer'
import { Router } from "express";

const router = Router();
router.use("/auth/*", ExpressAuth({ providers: [ Google ,Nodemailer] }))