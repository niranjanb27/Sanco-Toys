import User from "../model/user.model.js";

export const syncUser = async (req, res, next) => {
  try {
    const { userId, email } = req.auth;
    let user = await User.findOne({ clerkId: userId });
    // console.log("User in syncUser",user);
    // if (!user) {
    //   user = await User.create({ clerkId: userId, email });
    
    if (!user) {
      // Fetch user details from Clerk API
      const clerkResponse = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
        headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` },
      });
      const clerkUser = await clerkResponse.json();
      const email = clerkUser.email_addresses?.[0]?.email_address || null;
      user = await User.create({ clerkId: userId, email });
  } 
  req.user = user; // Attach user data to request
  next();
}catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }

};
