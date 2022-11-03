const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String },
    customerName: { type: String },
    phone: { type: String, unique: true },
    customerEmail: { type: String },
    address: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const CustomersModel = mongoose.model("customers", DataSchema);
module.exports = CustomersModel;
