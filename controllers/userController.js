const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
};

const getSingleUser = async (req, res) => {
  // const { id } = req.params;
  const  id  = req.user;
  const user = await User.findById(id);
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  const id  = req.user;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ user });
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  await User.findByIdAndDelete(id);
  return res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
