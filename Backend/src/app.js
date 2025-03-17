import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node"
import { syncUser } from "./middlewares/syncuser.middleware.js"
const app= express();

app.use(cors({
    // origin:process.env.CORS_ORIGIN,
    origin:"http://localhost:5173" ,
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

app.get("/protected", ClerkExpressRequireAuth(),syncUser, (req, res) => {
    console.log("req auth : ",req)
    res.json({ message: `Hello, user ${req.auth.userId}` });
  });


// import user routes 
import userRouter from "./routes/user.routes.js"
app.use("/api/v1/users",userRouter);

// import product route 
import productRouter from "./routes/product.routes.js"
app.use("/api/v1/product",productRouter);

// import cart route 
import cartRouter from "./routes/cart.routes.js"
app.use("/api/v1/cart",cartRouter);

  export {app};