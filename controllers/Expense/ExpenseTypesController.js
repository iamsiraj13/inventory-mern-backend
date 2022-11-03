const DataModel = require("../../models/Expense/ExpenseTypesModel");
const CreateService = require("../../services/common/CreateService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");
const DropdownService = require("../../services/common/DropdownService");
const ListService = require("../../services/common/LIstService");
const UpdateService = require("../../services/common/UpdateService");

exports.CreateExpenseTypes = async (req, res) => {
  let Result = await CreateService(req, DataModel);
  res.status(200).json(Result);
};

exports.UpdateExpenseTypes = async (req, res) => {
  let Result = await UpdateService(req, DataModel);
  res.status(200).json(Result);
};

exports.ExpenseTypesList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [{ name: SearchRgx }];
  let Result = await ListService(req, DataModel, SearchArray);
  res.status(200).json(Result);
};

exports.ExpenseTypesDropDown = async (req, res) => {
  let Result = await DropdownService(req, DataModel, { _id: 1, name: 1 });
  res.status(200).json(Result);
};

exports.ExpenseTypesDetailsByID = async (req, res) => {
  let Result = await DetailsByIDService(req, DataModel);
  res.status(200).json(Result);
};

// exports.DeleteExpenseTypes = async (req, res) => {
//   let DeleteID = req.params.id;
//   const ObjectId = mongoose.Types.ObjectId;
//   let CheckAssociate = await CheckAssociateService(
//     { TypeID: ObjectId(DeleteID) },
//     ExpensesModel
//   );
//   if (CheckAssociate) {
//     res
//       .status(200)
//       .json({ status: "associate", data: "Associate with Expenses" });
//   } else {
//     let Result = await DeleteService(req, DataModel);
//     res.status(200).json(Result);
//   }
// };
