const router = require("express").Router();
const productController = require("../controllers/productController");
const { verifyToken } = require("../controllers/authController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router
  .route("/")
  .get(productController.getAllProducts)
  .post([upload.single("productImage"), productController.createProduct]);

router
  .route("/:productId")
  .get(productController.getSingleProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
