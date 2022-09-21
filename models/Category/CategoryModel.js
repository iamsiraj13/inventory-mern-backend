const mongoose = require("mongoose");

const DataModel = mongoose.Schema(
  {
    email: { type: String },
    name: { type: String, unique: true },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CategoryModel = mongoose.model("categories", DataModel);

module.exports = CategoryModel;
