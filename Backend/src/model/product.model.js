import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  description: {
     type: String,
      required: true
     },
  price: { 
    type: Number,
     required: true
     },
  stock: { 
    type: Number,
     required: true 
    }, // Inventory count
  category: {
     type: String, 
     required: true
     },
  images: [{ type: String }], // Store image URLs (Cloudinary integration)
  ratings: { 
    type: Number,
     default: 0 
    },
  reviews: [{ 
    user: { type:String }, 
    comment: String, 
    rating: Number 
  }]
}, { timestamps: true });

export default mongoose.model("Product", ProductSchema);
