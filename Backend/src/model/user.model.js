import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    }, // Clerk user ID
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }, // Role-based access
    address: {
        type: String
    },
    cart: [
        {
           type:String
        }], // Cart items
    orders: [
        {
           type:String,
        }] // User orders
}, { timestamps: true });

const User=mongoose.model("User", UserSchema);
export default User;

