const ParentModel = require("../../models/Returns/ReturnsModel");
const ChildsModel = require("../../models/Returns/ReturnProductsModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const DeleteParentChildsService = require("../../services/common/DeleteParentChildsService");

exports.CreateReturns = async (req, res) => {
  let Result = await CreateParentChildsService(
    req,
    ParentModel,
    ChildsModel,
    "returnID"
  );
  res.status(200).json(Result);
};

exports.ReturnsList = async (req, res) => {
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

exports.ReturnDelete = async (req, res) => {
  let Result = await DeleteParentChildsService(
    req,
    ParentModel,
    ChildsModel,
    "returnID"
  );
  res.status(200).json(Result);
};
