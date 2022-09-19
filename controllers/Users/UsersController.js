const OTPModel = require("../../models/Users/OTPSModel");
const UserModel = require("../../models/Users/UserModel");
const { UserCreateService } = require("../../services/user/UserCreateService");
const {
  UserDetailsService,
} = require("../../services/user/UserDetailsService");
const { UserLoginService } = require("../../services/user/UserLoginService");
const { UserUpdateService } = require("../../services/user/UserUpdateService");
const {
  UserVerifyEmailService,
} = require("../../services/user/UserVerifyEmailService");
const {
  UserVerifyOtpService,
} = require("../../services/user/UserVerifyOtpService");

exports.Registration = async (req, res) => {
  const result = await UserCreateService(req, UserModel);
  res.status(200).json(result);
};

exports.Login = async (req, res) => {
  const result = await UserLoginService(req, UserModel);
  res.status(200).json(result);
};

exports.ProfileUpdate = async (req, res) => {
  const result = await UserUpdateService(req, UserModel);
  res.status(200).json(result);
};
exports.ProfileDetails = async (req, res) => {
  const result = await UserDetailsService(req, UserModel);
  res.status(200).json(result);
};

exports.RecoverVerifyEmail = async (req, res) => {
  const result = await UserVerifyEmailService(req, UserModel);
  res.status(200).json(result);
};

exports.RecoverVerifyOtp = async (req, res) => {
  const result = await UserVerifyOtpService(req, OTPModel);

  res.status(200).json(result);
};

exports.ResetPassword = async (req, res) => {
  try {
    const { email, OTP, newpass } = req.body;
    let status = 1;

    let OTPUsedCount = OTPModel.aggregate([
      { $match: { email: email, otp: OTP, status: status } },
      { $count: "total" },
    ]);

    if (OTPUsedCount.length > 0) {
      let passwordUpdate = await UserModel.updateOne(
        { email: email },
        { password: newpass }
      );
      res.status(200).json({ status: "success", data: passwordUpdate });
    } else {
      res.status(200).json({ status: "success", data: "Invalid Request" });
    }

    res.status(200).json({ status: "success", data: passwordUpdate });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};
