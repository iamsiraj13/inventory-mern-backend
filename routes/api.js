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
const {
  CreateCustomers,
  UpdateCustomers,
  CustomersList,
  CustomersDropDown,
  CustomersDetailsByID,
} = require("../controllers/Customers/CustomersController");
const {
  CreateExpenses,
  UpdateExpenses,
  ExpensesList,
  ExpenseDetailsByID,
} = require("../controllers/Expense/ExpenseController");
const {
  CreateExpenseTypes,
  UpdateExpenseTypes,
  ExpenseTypesList,
  ExpenseTypesDropDown,
  ExpenseTypesDetailsByID,
} = require("../controllers/Expense/ExpenseTypesController");
const {
  ProductsDropDown,
  ProductsDetailsByID,
  ProductsList,
  UpdateProducts,
  CreateProducts,
} = require("../controllers/Products/ProductsController");
const {
  PurchasesDelete,
  PurchasesList,
  CreatePurchases,
} = require("../controllers/Purchase/PurchaseController");
const {
  ReturnDelete,
  ReturnsList,
  CreateReturns,
} = require("../controllers/Returns/ReturnsController");
const {
  SaleDelete,
  SalesList,
  CreateSales,
} = require("../controllers/Sales/SalesController");
const {
  CreateSuppliers,
  UpdateSuppliers,
  SuppliersList,
  SuppliersDropDown,
  SuppliersDetailsByID,
} = require("../controllers/Supplier/SupplierController");
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

// Customers
router.post("/CreateCustomers", AuthVerify, CreateCustomers);
router.post("/UpdateCustomers/:id", AuthVerify, UpdateCustomers);
router.get(
  "/CustomersList/:pageNo/:perPage/:searchKeyword",
  AuthVerify,
  CustomersList
);
router.get("/CustomersDropDown", AuthVerify, CustomersDropDown);
// router.get("/DeleteCustomer/:id", AuthVerify, DeleteCustomer);
router.get("/CustomersDetailsByID/:id", AuthVerify, CustomersDetailsByID);

// Suppliers
router.post("/createSuppliers", AuthVerify, CreateSuppliers);
router.post("/updateSuppliers/:id", AuthVerify, UpdateSuppliers);
router.get(
  "/suppliersList/:pageNo/:perPage/:searchKeyword",
  AuthVerify,
  SuppliersList
);
router.get("/suppliersDropDown", AuthVerify, SuppliersDropDown);
// router.get(
//   "/DeleteSupplier/:id",
//   AuthVerify,
//   DeleteSupplier
// );

router.get("/SuppliersDetailsByID/:id", AuthVerify, SuppliersDetailsByID);

// ExpenseTypes
router.post("/CreateExpenseTypes", AuthVerify, CreateExpenseTypes);
router.post("/UpdateExpenseTypes/:id", AuthVerify, UpdateExpenseTypes);
router.get(
  "/ExpenseTypesList/:pageNo/:perPage/:searchKeyword",
  AuthVerify,
  ExpenseTypesList
);
router.get("/ExpenseTypesDropDown", AuthVerify, ExpenseTypesDropDown);
// router.get("/DeleteExpenseTypes/:id", AuthVerify, DeleteExpenseTypes);
router.get("/ExpenseTypesDetailsByID/:id", AuthVerify, ExpenseTypesDetailsByID);

// Expenses
router.post("/CreateExpenses", AuthVerify, CreateExpenses);
router.post("/UpdateExpenses/:id", AuthVerify, UpdateExpenses);
router.get(
  "/ExpensesList/:pageNo/:perPage/:searchKeyword",
  AuthVerify,
  ExpensesList
);
// router.get("/DeleteExpense/:id",AuthVerify,DeleteExpense);
router.get("/ExpenseDetailsByID/:id", AuthVerify, ExpenseDetailsByID);

// Products
router.post("/CreateProducts", AuthVerify, CreateProducts);
router.post("/UpdateProducts/:id", AuthVerify, UpdateProducts);
router.get(
  "/ProductsList/:pageNo/:perPage/:searchKeyword",
  AuthVerify,
  ProductsList
);
// router.get("/DeleteProduct/:id",AuthVerify,DeleteProduct);
router.get("/ProductsDetailsByID/:id", AuthVerify, ProductsDetailsByID);
router.get("/ProductsDropDown", AuthVerify, ProductsDropDown);

//Purchases
router.post("/CreatePurchases", AuthVerify, CreatePurchases);
router.get(
  "/PurchasesList/:pageNo/:perPage/:searchKeyword",
  AuthVerify,
  PurchasesList
);
router.get("/PurchasesDelete/:id", AuthVerify, PurchasesDelete);

//Sales
router.post("/CreateSales", AuthVerify, CreateSales);
router.get("/SalesList/:pageNo/:perPage/:searchKeyword", AuthVerify, SalesList);
router.get("/SaleDelete/:id", AuthVerify, SaleDelete);

//Return
router.post("/CreateReturns", AuthVerify, CreateReturns);
router.get(
  "/ReturnsList/:pageNo/:perPage/:searchKeyword",
  AuthVerify,
  ReturnsList
);
router.get("/ReturnDelete/:id", AuthVerify, ReturnDelete);

//Report
// router.post("/ExpensesByDate", AuthVerify, ExpensesByDate);
// router.post("/ReturnByDate", AuthVerify, ReturnByDate);
// router.post("/PurchaseByDate", AuthVerify, PurchaseByDate);
// router.post("/SalesByDate", AuthVerify, SalesByDate);

module.exports = router;
