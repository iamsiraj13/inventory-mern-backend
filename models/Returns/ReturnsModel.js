const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String },
    customerID: { type: mongoose.Schema.Types.ObjectId },
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
const ReturnsModel = mongoose.model("returns", DataSchema);
module.exports = ReturnsModel;
