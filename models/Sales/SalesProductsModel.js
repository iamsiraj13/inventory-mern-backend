const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String },
    saleID: { type: mongoose.Schema.Types.ObjectId },
    productID: { type: mongoose.Schema.Types.ObjectId },
    qty: { type: Number },
    unitCost: { type: Number },
    total: { type: Number },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const SaleProductsModel = mongoose.model("saleproducts", DataSchema);
module.exports = SaleProductsModel;
