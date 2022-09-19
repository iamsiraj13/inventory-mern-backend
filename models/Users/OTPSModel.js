const mongoose = require("mongoose");

const DataModel = mongoose.Schema(
  {
    email: { type: String },
    otp: { type: String },
    status: { type: Number, default: 0 },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const OTPModel = mongoose.model("otps", DataModel);

module.exports = OTPModel;
