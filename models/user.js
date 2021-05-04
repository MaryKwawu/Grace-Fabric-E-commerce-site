const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, " firstname is required ."],
    },
    lastName: {
      type: String,
      required: [true, " lastname is required. "],
    },
    email: {
      type: String,
      required: [true, " email is required "],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, " password is required "],
    },
    phoneNumber: {
      type: Number,
      required: [true, " phonenumber is required "],
    },
    address: {
      type: String,
      required: [true, " address is required "],
    },
    cart: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cart",
        // required: [true, " cart is required "],
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = model("User", userSchema);
