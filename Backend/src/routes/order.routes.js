import { syncUser } from "../middlewares/syncuser.middleware.js"
import { checkAdmin } from "../middlewares/checkAdmin.middleware.js"
import { Router } from "express"
import {ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node" 
import { cancelOrder, createOrder, getAllOrders, getOrderById, getUserOrders, updateOrderStatus } from "../controller/order.controller.js"

const orderRouter=Router();

orderRouter.post("/create-order",ClerkExpressRequireAuth,syncUser,createOrder);

orderRouter.get("/get-user-orders",ClerkExpressRequireAuth(),syncUser,getUserOrders);

orderRouter.get("/get-order",ClerkExpressRequireAuth(),syncUser,getOrderById);

orderRouter.patch("update-order-status",ClerkExpressRequireAuth(),syncUser,checkAdmin,updateOrderStatus);

orderRouter.delete("/cancel-order",ClerkExpressRequireAuth(),syncUser,cancelOrder);

orderRouter.get("/get-all-order",ClerkExpressRequireAuth(),syncUser,checkAdmin,getAllOrders);
export default orderRouter;