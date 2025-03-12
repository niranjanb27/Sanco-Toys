import User from "../model/user.model.js";

export const syncUser = async (req, res, next) => {
  try {
    const { userId, email } = req.auth;

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({ clerkId: userId, email });
    }

    req.user = user; // Attach user data to request
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
