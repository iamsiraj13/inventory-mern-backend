const ParentModel = require("../../models/Purchase/PurchaseModel");
const ChildsModel = require("../../models/Purchase/PurchaseProductsModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");
const DeleteParentChildsService = require("../../services/common/DeleteParentChildsService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");

exports.CreatePurchases = async (req, res) => {
  let Result = await CreateParentChildsService(
    req,
    ParentModel,
    ChildsModel,
    "purchaseID"
  );
  res.status(200).json(Result);
};

exports.PurchasesList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let JoinStage = {
    $lookup: {
      from: "suppliers",
      localField: "supplierID",
      foreignField: "_id",
      as: "suppliers",
    },
  };
  let SearchArray = [
    { Note: SearchRgx },
    { "suppliers.name": SearchRgx },
    { "suppliers.address": SearchRgx },
    { "suppliers.phone": SearchRgx },
    { "suppliers.email": SearchRgx },
  ];
  let Result = await ListOneJoinService(
    req,
    ParentModel,
    SearchArray,
    JoinStage
  );
  res.status(200).json(Result);
};

exports.PurchasesDelete = async (req, res) => {
  let Result = await DeleteParentChildsService(
    req,
    ParentModel,
    ChildsModel,
    "purchaseID"
  );
  res.status(200).json(Result);
};
