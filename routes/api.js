const express = require("express");
const router = express.Router();
const {
  Registration,
  Login,
  ProfileUpdate,
  ProfileDetails,
  RecoverVerifyEmail,
  RecoverVerifyOtp,
  ResetPassword,
} = require("../controllers/Users/UsersController");
const AuthVerify = require("../middlewares/AuthVerify");
const UserModel = require("../models/Users/UserModel");

// users profile
router.post("/registration", Registration);
router.post("/login", Login);
router.post("/profileUpdate", AuthVerify, ProfileUpdate);
router.get("/profileDetails", AuthVerify, ProfileDetails);

router.get("/recoverVerifyEmail/:email", RecoverVerifyEmail);
router.get("/verifyOtp/:email/:otpCode", RecoverVerifyOtp);
router.get("/verifyOtp/:email/:otpCode", RecoverVerifyOtp);

router.get("/resetPassword", ResetPassword);

module.exports = router;
