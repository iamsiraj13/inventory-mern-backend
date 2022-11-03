const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String },
    name: { type: String, unique: true },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const ExpenseTypesModel = mongoose.model("expensetypes", DataSchema);
module.exports = ExpenseTypesModel;
