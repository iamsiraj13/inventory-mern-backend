const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String },
    typeID: { type: mongoose.Schema.Types.ObjectId },
    amount: { type: Number },
    note: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const ExpensesModel = mongoose.model("expenses", DataSchema);
module.exports = ExpensesModel;
