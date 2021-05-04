const Review = require("../models/review");

const getAllReviews = async (req, res) => {
  const review = await Review.find();
  res.status(200).json({ review });
};

const getSingleReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  res.status(200).json({ review });
};
const createReview = async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const price = req.body.price;
  const productText = req.body.productText;
  const star = req.body.star;

   const review = await Review.create({userId, productId, price, productText, star });
  res.status(201).json({ review });
  };

const updateReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ review });
};

const deleteReview = async (req, res) => {
  const { id } = req.params;
  await Review.findByIdAndDelete(id);
  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
};
