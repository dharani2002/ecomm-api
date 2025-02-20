import { getSession } from "@auth/express"
import { NextFunction } from "express"
import { getToken } from "next-auth/jwt";

export async function authenticatedUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const session = await getSession(req, authConfig)
    if (!session?.user) {
      res.redirect("/login")
    } 
    const token=await getToken(req,authConfig)
    if (!token?.user) {
        res.redirect("/login")
      } 
     next()
  }