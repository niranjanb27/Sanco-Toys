import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({

  user: { 
    type: String, required: true
 },
  order: { type: String,
    required: true
 },
  paymentId: { 
    type: String,
     required: true
     }, // Stripe/Razorpay transaction ID
  amount: { 
    type: Number,
     required: true
     },
  status: {
     type: String,
      enum: ["success", "failed", "pending"], required: true
     },
  method: { 
    type: String, 
    enum: ["Card", "UPI", "Wallet", "COD"],
     required: true 
    }
}, { timestamps: true });

export default mongoose.model("Payment", PaymentSchema);
