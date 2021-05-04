const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // const email = req.body.email;
  // const username = req.body.username;
  // const password = req.body.password;
  const {
    email,
    firstName,
    lastName,
    phoneNumber,
    address,
    password,
  } = req.body;

  //check if all fields are present
  if (
    !email ||
    !firstName ||
    !password ||
    !address ||
    !phoneNumber ||
    !lastName
  ) {
    return res.status(400).send("please provide all fields");
  }

  //check if username is already in database
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).send("Email already exists.");
  }

  //hashing ofpassword
  const hashedPassword = await bcrypt.hash(password, 12);

  //create user
  const user = await User.create({
    email,
    firstName,
    lastName,
    address,
    phoneNumber,
    password: hashedPassword,
  });

  //generatetoken
  //const token = jwt.sign({ id: user._id }, "123456789", { expiresIn: "1h" });

  //return response
  res.status(201).json({ user });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //check if user is in the database
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("Invalid Credentials");
  }

  //compares Passwords

  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send("password does not match");
  }
  const token = jwt.sign({ id: user._id }, "123456789", { expiresIn: "1h" });

  //return response
  res.status(200).json({ token });
};

//Authorization
const verifyToken = async (req, res, next) => {
  let user;
  let token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) return res.status(401).json({ message: "Not Authorized." });

  try {
    user = jwt.verify(token, "123456789");
  } catch (error) {
    res.status(401).json({ message: "invalid token" });
  }

  // console.log(token);
  req.user = user.id;
  console.log(user);
  next();
};

module.exports = {
  register,
  login,
  verifyToken,
};
