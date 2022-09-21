const express = require("express");
const {
  CreateBrand,
  UpdateBrand,
  BrandDropdown,
  BrandList,
} = require("../controllers/Brands/BrandController");
const {
  CreateCategory,
  UpdateCategory,
  CategoryList,
  CategoryDropdown,
  CategoryDetail,
} = require("../controllers/Category/CategoryController");
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
const BrandsModel = require("../models/Brands/BrandModel");

// users profile
router.post("/registration", Registration);
router.post("/login", Login);
router.post("/profileUpdate", AuthVerify, ProfileUpdate);
router.get("/profileDetails", AuthVerify, ProfileDetails);
router.get("/recoverVerifyEmail/:email", RecoverVerifyEmail);
router.get("/verifyOtp/:email/:otpCode", RecoverVerifyOtp);
router.get("/resetPassword", ResetPassword);

// Brands
router.post("/createBrand", AuthVerify, CreateBrand);
router.post("/updateBrand/:id", AuthVerify, UpdateBrand);
router.get("/brandList/:pageNo/:perPage/:searchKeyword", AuthVerify, BrandList);
router.get("/brandDropdown", AuthVerify, BrandDropdown);

// Category
router.get("/createCategory", AuthVerify, CreateCategory);
router.post("/updateCategory/:id", AuthVerify, UpdateCategory);
router.get(
  "/categoryList/:pageNo/:perPage/:searchKeyword",
  AuthVerify,
  CategoryList
);
router.get("/categoryDropdown", AuthVerify, CategoryDropdown);
router.get("/categoryDetail/:id", AuthVerify, CategoryDetail);

module.exports = router;
