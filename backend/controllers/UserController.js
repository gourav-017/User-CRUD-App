import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const createUser = async (req, res) => {
  const { name, age, email } = req.body;
  const newUser = new User({ name, age, email });
  await newUser.save();
  res.status(201).json(newUser);
};


export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  const updatedUser = await User.findByIdAndUpdate(id, { name, age, email }, { new: true });
  res.json(updatedUser);
};


export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: "User deleted" });
};
