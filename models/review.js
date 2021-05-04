const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, " userid is required ."],
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: [true, " productid is required. "],
    },
    productText: {
      type: String,
      required: [true, " producttext  is required "],
    },
    star: {
      type: String,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Review", reviewSchema);
