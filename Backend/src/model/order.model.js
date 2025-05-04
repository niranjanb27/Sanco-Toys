import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {    type: mongoose.Schema.Types.Mixed, 
    required: true  },
  products: [
    {
      product: { type: mongoose.Schema.Types.Mixed,  required: true },
      quantity: { type: Number, required: true },
    }
  ],
  totalAmount: { 
    type: Number, 
    required: true
 },
 invoice:{
  type:String,
  default:""
 },
  paymentStatus: { 
    type: String,
    enum: ["pending", "paid", "failed"], 
    default: "pending"
},
  paymentMethod: { 
    type: String, 
    enum: ["COD", "Card", "UPI", "Wallet"],
     },
  shippingAddress: {
     type: String, 
     required: true 
    },
  orderStatus: { 
    type: String,
     enum: ["processing", "shipped", "delivered", "cancelled"],
     default: "processing" }
}, { timestamps: true });

export default mongoose.model("Order", OrderSchema);
