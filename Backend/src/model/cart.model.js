import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  user: { 
    type: String,
     required: true },
  products: [
    {
      product: {  type: mongoose.Schema.Types.Mixed,  required: true },
      quantity: { type: Number, required: true, min: 1 }
    }
  ]
}, { timestamps: true });

export default mongoose.model("Cart", CartSchema);
