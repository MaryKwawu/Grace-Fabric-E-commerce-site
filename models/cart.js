const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, " userid is required ."],
    },
    itemsBought: {
      type: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          quantity: {
            type: Number,
            min: 1,
            required: true,
          },
        },
      ],
      required: [true, " items bought is required. "],
    },
    // itemsbought: {
    //   type: [String],
    //   required: [true, " items bought is required. "],
    // },
    totalOfCloth: {
      type: Number,
      required: [true, " total of cloth is required "],
    },
    shippingCost: {
      type: Number,
      required: [true, " cost of shipping is required "],
    },
    shippingPlusClothTotalCost: {
      type: Number,
      required: [true, " total cost of shipping and cloth is required "],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Cart", cartSchema);
