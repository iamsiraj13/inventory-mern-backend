const ParentModel = require("../../models/Sales/SalesModel");
const ChildsModel = require("../../models/Sales/SalesProductsModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");
const DeleteParentChildsService = require("../../services/common/DeleteParentChildsService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");

exports.CreateSales = async (req, res) => {
  let Result = await CreateParentChildsService(
    req,
    ParentModel,
    ChildsModel,
    "saleID"
  );
  res.status(200).json(Result);
};

exports.SalesList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let JoinStage = {
    $lookup: {
      from: "customers",
      localField: "customerID",
      foreignField: "_id",
      as: "customers",
    },
  };
  let SearchArray = [
    { Note: SearchRgx },
    { "customers.customerName": SearchRgx },
    { "customers.address": SearchRgx },
    { "customers.phone": SearchRgx },
    { "customers.customerEmail": SearchRgx },
  ];
  let Result = await ListOneJoinService(
    req,
    ParentModel,
    SearchArray,
    JoinStage
  );
  res.status(200).json(Result);
};

exports.SaleDelete = async (req, res) => {
  let Result = await DeleteParentChildsService(
    req,
    ParentModel,
    ChildsModel,
    "saleID"
  );
  res.status(200).json(Result);
};
