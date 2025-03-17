import Cart from "../model/cart.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import Product from "../model/product.model.js"
import User from "../model/user.model.js"

const addToCart=asyncHandler(async(req,res)=>{
    const userId=req.auth?.userId;
    const user=await User.findOne({clerkId:userId});
    if(!user){
        return res.status(401).json(new ApiResponse(401,null,"Unauthorised req !"));
    }
    const productId=req.params.id;
    const {quantity}=req.body;

    const product=await Product.findById(productId);
    if(!product){
        return res.status(404).json(new ApiResponse(404,null,"Product not find ! "));
    }
    let cart =await Cart.findOne({user:user._id});
    if(!cart){
        cart=new Cart({user:user._id,products:[]});
    }

    const itemIndex =cart.products.findIndex(item=>item.product===productId);

    if(itemIndex>-1){
        cart.products[itemIndex].quantity+=quantity;
    }else{
        cart.products.push({product:productId,quantity});
    }
    await cart.save();
    return res.status(200).json(new ApiResponse(200,cart,"Product added into cart successfully ! "));

});

const removeFromCart=asyncHandler(async(req,res)=>{
    const userId=req.auth?.userId;
    const user=await User.findOne({clerkId:userId});
    if(!user){
        return res.status(401).json(new ApiResponse(401,null,"Unauthorised req !"));
    }
    const  productId  = req.params.id;

    let cart = await Cart.findOne({ user: user._id});

    if (!cart) {
        return res.status(404).json(new ApiResponse(404, null, "Cart not found"));
    }
    const itemIndex =cart.products.findIndex(item=>item.product===productId);

    if(itemIndex>-1){
        if(cart.products[itemIndex].quantity>0){
            cart.products[itemIndex].quantity-=1;
        }
    }else{
      return res.status(404).json(new ApiResponse(404,null,"This item is already absent in cart"));
    }
   
    await cart.save();
    return res.status(200).json(new ApiResponse(200, cart, "Product removed from cart"));
});

const getCart=asyncHandler(async(req,res)=>{
    const userId=req.auth?.userId;
    const user= await User.findOne({clerkId: userId});
    if(!user){
        return res.status(401).json(new ApiResponse(401,null,"Unauthorised user !"));
    }

    const cart=await Cart.findOne({user: user._id});
    if(!cart || cart.products.length === 0){
        return res.status(404).json(new ApiResponse(404,null,"No items in a cart ! "));
    }
    return res.status(200).json(new ApiResponse(200,cart,"Cart fetched Successfully ! "));
});

const updateCartItem=asyncHandler(async(req,res)=>{
    const userId=req.auth?.userId;
    const user=await User.findOne({clerkId:userId});
    if(!user){
        return res.status(401).json(new ApiResponse(401,null,"Unauthorised req !"));
    }
    const productId=req.params.id;
    const {quantity}=req.body;

    let cart =await Cart.findOne({user:user._id});
    if(!cart){
        return res.status(404).json(new ApiResponse(404,null,"cart not found !"));
    }
    const item =cart.products.find(item=>item.product===productId);
    if(!item){
        return res.status(404).json(new ApiResponse(404,null,"The item i snot find !"));
    }
    item.quantity=quantity;
    await cart.save();

    return res.status(200).json(new ApiResponse(200,cart,"Cart updated Successfully ! "));
});

const clearCart=asyncHandler(async(req,res)=>{
    const userId=req.auth?.userId;
    const user=await User.findOne({clerkId:userId});
    if(!user){
        return res.status(401).json(new ApiResponse(401,null,"Unauthorised req !"));
    }

    const cart=await Cart.findOne({user:user._id});
    if(!cart){
        return res.status(404).json(new ApiResponse(404,null,"the cart is already empty ! "));
    }
    cart.products=[];
    await cart.save();
    return res.status(200).json(new ApiResponse(200,cart,"cart cleared successfully ! "));
});


export {addToCart,removeFromCart,getCart,updateCartItem,clearCart}