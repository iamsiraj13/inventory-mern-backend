const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String },
    name: { type: String },
    address: { type: String },
    phone: { type: String, unique: true },
    supEmail: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const SuppliersModel = mongoose.model("suppliers", DataSchema);
module.exports = SuppliersModel;
