import { syncUser } from "../middlewares/syncuser.middleware.js"
import { checkAdmin } from "../middlewares/checkAdmin.middleware.js"
import { Router } from "express"
import {ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node" 
import { addToCart, clearCart, getCart, removeFromCart, updateCartItem } from "../controller/cart.controller.js";

const cartRouter=Router();

// add to cart route
cartRouter.post("/add-to-cart/:id",ClerkExpressRequireAuth(),syncUser,addToCart);

// get cart route
cartRouter.get("/get-cart",ClerkExpressRequireAuth(),syncUser,getCart);

// remove from cart route
cartRouter.post("/remove-from-cart/:id",ClerkExpressRequireAuth(),syncUser,removeFromCart);

// clear cart route 
cartRouter.post("/clear-cart",ClerkExpressRequireAuth(),syncUser,clearCart);

// update cart item route 
cartRouter.patch("/update-cart-item/:id",ClerkExpressRequireAuth(),syncUser,updateCartItem);

export default cartRouter;