const BrandsModel = require("../../models/Brands/BrandModel");
const CreateService = require("../../services/common/CreateService");
const DropdownService = require("../../services/common/DropdownService");
const ListService = require("../../services/common/LIstService");
const UpdateService = require("../../services/common/UpdateService");

exports.CreateBrand = async (req, res) => {
  let Result = await CreateService(req, BrandsModel);
  res.json(Result);
};

exports.UpdateBrand = async (req, res) => {
  let Result = await UpdateService(req, BrandsModel);
  res.json(Result);
};

exports.BrandDropdown = async (req, res) => {
  let Result = await DropdownService(req, BrandsModel, { _id: 1, name: 1 });
  res.json(Result);
};

exports.BrandList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }];
  let Result = await ListService(req, BrandsModel, SearchArray);
  res.json(Result);
};
