const router = require("express").Router();
const cartController = require("../controllers/cartController");

router
  .route("/")
  .get(cartController.getAllCarts)
  .post(cartController.createCart);

router
  .route("/:userId")
  .get(cartController.getSingleCart)
  .patch(cartController.updateCart)
  .delete(cartController.deleteCart);

module.exports = router;
