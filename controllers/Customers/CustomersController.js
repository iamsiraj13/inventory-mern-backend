const CreateService = require("../../services/common/CreateService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");
const DropdownService = require("../../services/common/DropdownService");
const ListService = require("../../services/common/LIstService");
const UpdateService = require("../../services/common/UpdateService");
const DataModel = require("../../models/Customers/CustomersModel");

exports.CreateCustomers = async (req, res) => {
  let Result = await CreateService(req, DataModel);
  res.status(200).json(Result);
};

exports.UpdateCustomers = async (req, res) => {
  let Result = await UpdateService(req, DataModel);
  res.status(200).json(Result);
};

exports.CustomersList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [
    { customerName: SearchRgx },
    { phone: SearchRgx },
    { customerEmail: SearchRgx },
    { address: SearchRgx },
  ];
  let Result = await ListService(req, DataModel, SearchArray);
  res.status(200).json(Result);
};

exports.CustomersDropDown = async (req, res) => {
  let Result = await DropdownService(req, DataModel, {
    _id: 1,
    customerName: 1,
  });
  res.status(200).json(Result);
};

exports.CustomersDetailsByID = async (req, res) => {
  let Result = await DetailsByIDService(req, DataModel);
  res.status(200).json(Result);
};

// exports.DeleteCustomer = async (req, res) => {
//   let DeleteID = req.params.id;
//   const ObjectId = mongoose.Types.ObjectId;
//   let CheckAssociate = await CheckAssociateService(
//     { CustomerID: ObjectId(DeleteID) },
//     SalesModel
//   );
//   if (CheckAssociate) {
//     res.status(200).json({ status: "associate", data: "Associate with Sales" });
//   } else {
//     let Result = await DeleteService(req, DataModel);
//     res.status(200).json(Result);
//   }
// };
