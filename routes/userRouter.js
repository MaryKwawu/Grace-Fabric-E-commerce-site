const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyToken,login, register } = require("../controllers/authController");

router.get("/", userController.getAllUsers);

router.get("/signed-user", verifyToken, userController.getSingleUser);

// router.post("/signup", register);

// router.post("/login", login);

router.patch("/update", verifyToken, userController.updateUser);

router.delete("/delete",verifyToken, userController.deleteUser);

module.exports = router;
