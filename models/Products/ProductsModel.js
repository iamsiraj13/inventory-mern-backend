const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String },
    categoryID: { type: mongoose.Schema.Types.ObjectId },
    brandID: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    unit: { type: String },
    details: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const ProductsModel = mongoose.model("products", DataSchema);
module.exports = ProductsModel;
