const DataModel = require("../../models/Expense/ExpenseModel");
const CreateService = require("../../services/common/CreateService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const UpdateService = require("../../services/common/UpdateService");

exports.CreateExpenses = async (req, res) => {
  let Result = await CreateService(req, DataModel);
  res.status(200).json(Result);
};

exports.UpdateExpenses = async (req, res) => {
  let Result = await UpdateService(req, DataModel);
  res.status(200).json(Result);
};

exports.ExpensesList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [{ note: SearchRgx }, { "type.name": SearchRgx }];
  let JoinStage = {
    $lookup: {
      from: "expensetypes",
      localField: "typeID",
      foreignField: "_id",
      as: "type",
    },
  };
  let Result = await ListOneJoinService(req, DataModel, SearchArray, JoinStage);
  res.status(200).json(Result);
};

exports.ExpenseDetailsByID = async (req, res) => {
  let Result = await DetailsByIDService(req, DataModel);
  res.status(200).json(Result);
};

// exports.DeleteExpense = async (req, res) => {
//   let Result = await DeleteService(req, DataModel);
//   res.status(200).json(Result);
// };
