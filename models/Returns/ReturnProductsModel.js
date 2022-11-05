const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String },
    returnID: { type: mongoose.Schema.Types.ObjectId },
    productID: { type: mongoose.Schema.Types.ObjectId },
    qty: { type: Number },
    unitCost: { type: Number },
    total: { type: Number },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const ReturnProductsModel = mongoose.model("returnproducts", DataSchema);
module.exports = ReturnProductsModel;
