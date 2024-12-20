import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUser } });
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({error:"Something went wrong."});
  }
}