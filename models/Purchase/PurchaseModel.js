const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String },
    supplierID: { type: mongoose.Schema.Types.ObjectId },
    vatTax: { type: Number },
    discount: { type: Number },
    otherCost: { type: Number },
    shippingCost: { type: Number },
    grandTotal: { type: Number },
    note: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const PurchasesModel = mongoose.model("purchases", DataSchema);
module.exports = PurchasesModel;
