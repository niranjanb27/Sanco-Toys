import { syncUser } from "../middlewares/syncuser.middleware.js"
import { checkAdmin } from "../middlewares/checkAdmin.middleware.js"
import { Router } from "express"
import {ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node"
import {createProduct, deleteProduct, getAllProduct, getProductById, updateProduct} from "../controller/product.controller.js"
import {upload} from "../middlewares/multer.middleware.js"

const productRouter =Router();

//  create product route (Admin)
productRouter.post("/create-product",ClerkExpressRequireAuth(),syncUser,checkAdmin,upload.fields([{
    name:"images",maxCount:10
},
{
    name:"videos",
    maxCount:2
}
]),createProduct);

// get all product route
productRouter.get("/get-all-products",getAllProduct);

// get product by id route
productRouter.get("/get-product/:id",getProductById);

// update the product route (Admin)
productRouter.patch("/update-product/:id",ClerkExpressRequireAuth(),syncUser,checkAdmin,updateProduct);

// delete the product route(Admin)
productRouter.delete("/delete-product/:id",ClerkExpressRequireAuth(),syncUser,checkAdmin,deleteProduct);

export default productRouter;