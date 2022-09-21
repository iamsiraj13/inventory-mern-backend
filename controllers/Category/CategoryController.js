const CategoryModel = require("../../models/Category/CategoryModel");
const CreateService = require("../../services/common/CreateService");
const DetailsService = require("../../services/common/DetailsService");
const DropdownService = require("../../services/common/DropdownService");
const ListService = require("../../services/common/LIstService");
const UpdateService = require("../../services/common/UpdateService");

exports.CreateCategory = async (req, res) => {
  let Result = await CreateService(req, CategoryModel);
  res.status(200).json(Result);
};
exports.UpdateCategory = async (req, res) => {
  let Result = await UpdateService(req, CategoryModel);
  res.status(200).json(Result);
};
exports.CategoryDropdown = async (req, res) => {
  let Result = await DropdownService(req, CategoryModel, { _id: 1, name: 1 });
  res.status(200).json(Result);
};
exports.CategoryDetail = async (req, res) => {
  let Result = await DetailsService(req, CategoryModel);
  res.status(200).json(Result);
};
exports.CategoryList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }];
  let Result = await ListService(req, CategoryModel, SearchArray);
  res.json(Result);
};
