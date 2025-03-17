import {deleteUser, getAlluser, getUserProfile, updateProfile} from "../controller/user.controller.js"
import { syncUser } from "../middlewares/syncuser.middleware.js"
import { checkAdmin } from "../middlewares/checkAdmin.middleware.js"
import { Router } from "express"
import {ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node"
import { get } from "mongoose"

const userRouter=Router();

//  get user profile route
userRouter.get("/get-user-profile",ClerkExpressRequireAuth(),syncUser,getUserProfile);

// update user profile route 
userRouter.patch("/update-user-profile",ClerkExpressRequireAuth(),syncUser,updateProfile);

// get all user route (Admin)
userRouter.get("/get-all-users",ClerkExpressRequireAuth(),syncUser,checkAdmin,getAlluser);

// delete a particular user (Admin)
userRouter.delete("/delete-users/:id",ClerkExpressRequireAuth(),syncUser,checkAdmin,deleteUser);

export default userRouter;

 