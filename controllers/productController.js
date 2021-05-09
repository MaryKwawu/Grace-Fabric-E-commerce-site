const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({ product });
};

const getSingleProduct = async (req, res) => {
  const id = req.params.productId;
  const product = await Product.findById(id);
  res.status(200).json({ product });
};

const createProduct = async (req, res) => {
  const productName = req.body.productName;
  const description = req.body.description;
  const price = req.body.price;
  const typeOfFabric = req.body.typeOfFabric;
  const fabricNickName = req.body.fabricNickName;
  const colourOfLinen = req.body.colourOfLinen;
  const yard = req.body.yard;
  const itemsInStock = req.body.itemsInStock;
  const typeOfTextile = req.body.typeOfTextile;
  const imagePath = req.file.path;

  // console.log(req.files, req.file, req.body);

  const product = await Product.create({
    productName,
    description,
    price,
    typeOfFabric,
    fabricNickName,
    colourOfLinen,
    yard,
    itemsInStock,
    typeOfTextile,
    imagePath,
  });
  res.status(201).json({ product });
};

const updateProduct = async (req, res) => {
  const id = req.params.productId;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ product });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
