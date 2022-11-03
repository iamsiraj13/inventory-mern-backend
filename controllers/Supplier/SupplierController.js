const CreateService = require("../../services/common/CreateService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");
const DropdownService = require("../../services/common/DropdownService");
const ListService = require("../../services/common/LIstService");
const UpdateService = require("../../services/common/UpdateService");
const DataModel = require("../../models/Supliers/SupliersModel");
exports.CreateSuppliers = async (req, res) => {
  let Result = await CreateService(req, DataModel);
  res.status(200).json(Result);
};

exports.UpdateSuppliers = async (req, res) => {
  let Result = await UpdateService(req, DataModel);
  res.status(200).json(Result);
};

exports.SuppliersList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [
    { name: SearchRgx },
    { phone: SearchRgx },
    { supEmail: SearchRgx },
    { address: SearchRgx },
  ];
  let Result = await ListService(req, DataModel, SearchArray);
  res.status(200).json(Result);
};

exports.SuppliersDropDown = async (req, res) => {
  let Result = await DropdownService(req, DataModel, { _id: 1, name: 1 });
  res.status(200).json(Result);
};

exports.SuppliersDetailsByID = async (req, res) => {
  let Result = await DetailsByIDService(req, DataModel);
  res.status(200).json(Result);
};

// exports.DeleteSupplier=async (req, res) => {
//     let DeleteID=req.params.id;
//     const ObjectId = mongoose.Types.ObjectId;
//     let CheckAssociate= await CheckAssociateService({SupplierID:ObjectId(DeleteID)},PurchasesModel);
//     if(CheckAssociate){
//         res.status(200).json({status: "associate", data: "Associate with Purchases"})
//     }
//     else{
//         let Result=await DeleteService(req,DataModel);
//         res.status(200).json(Result)
//     }
// }
