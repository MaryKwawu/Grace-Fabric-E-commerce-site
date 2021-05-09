const Cart = require("../models/cart");

const getAllCarts = async (req, res) => {
  const carts = await Cart.find();
  res.status(200).json({ carts });
};

const getSingleCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ userId }).populate("itemsBought.productId");

  res.status(200).json({ cart });
};
const createCart = async (req, res) => {
  const userId = req.body.userId;
  const itemsBought = req.body.itemsBought;
  const totalOfCloth = req.body.totalOfCloth;
  const shippingCost = req.body.shippingCost;
  const shippingPlusClothTotalCost = req.body.shippingPlusClothTotalCost;

  const cart = await Cart.create({
    userId,
    itemsBought,
    totalOfCloth,
    shippingCost,
    shippingPlusClothTotalCost,
  });
  res.status(201).json({ cart });
};

const updateCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ userId });
  const updatedCart = await Cart.findByIdAndUpdate(cart._id, req.body, {
    new: true,
  }).populate("itemsBought.productId");
  res.status(200).json({ cart: updatedCart });
};

const deleteCart = async (req, res) => {
  const { id } = req.params;
  await Cart.findByIdAndDelete(id);
  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getAllCarts,
  getSingleCart,
  createCart,
  updateCart,
  deleteCart,
};
