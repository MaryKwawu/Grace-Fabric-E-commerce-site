const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, " productname is required ."],
    },
    description: {
      type: String,
      required: [true, " description is required. "],
    },
    price: {
      type: Number,
      required: [true, " price is required "],
    },
    typeOfFabric: {
      type: String,
      required: [true, " fabric type is required "],
    },
    // typeOfFabric: {
    //   required: [true, " fabric type is required "],

    // },
    //  fabricImage: {
    //    type: String,
    //    required: [true, " fabric image isnot required  "],

    // },
    fabricNickName: {
      type: String,
      required: [true, " nick name of fabric is required "],
    },
    colourOfLinen: {
      type: String,
      required: [true, " color of linen is required "],
    },
    yard: {
      type: Number,
      required: [true, " yard is required "],
    },
    itemsInStock: {
      type: Number,
      required: [true, " item in stock is required "],
    },
    typeOfTextile: {
      type: String,
      required: [true, " textile type is required "],
    },
    imagePath: {
      type: String,
      required: [true, "image path is required"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Product", productSchema);
