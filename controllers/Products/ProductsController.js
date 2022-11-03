const CreateService = require("../../services/common/CreateService");
const DataModel = require("../../models/Products/ProductsModel");
const UpdateService = require("../../services/common/UpdateService");
const ListTwoJoinService = require("../../services/common/ListTwoJoinService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");
const DropdownService = require("../../services/common/DropdownService");

exports.CreateProducts = async (req, res) => {
  let Result = await CreateService(req, DataModel);
  res.status(200).json(Result);
};

exports.UpdateProducts = async (req, res) => {
  let Result = await UpdateService(req, DataModel);
  res.status(200).json(Result);
};

exports.ProductsList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let JoinStage1 = {
    $lookup: {
      from: "brands",
      localField: "brandID",
      foreignField: "_id",
      as: "brands",
    },
  };
  let JoinStage2 = {
    $lookup: {
      from: "categories",
      localField: "categoryID",
      foreignField: "_id",
      as: "categories",
    },
  };
  let SearchArray = [
    { name: SearchRgx },
    { unit: SearchRgx },
    { details: SearchRgx },
    { "brands.name": SearchRgx },
    { "categories.name": SearchRgx },
  ];
  let Result = await ListTwoJoinService(
    req,
    DataModel,
    SearchArray,
    JoinStage1,
    JoinStage2
  );
  res.status(200).json(Result);
};

exports.ProductsDetailsByID = async (req, res) => {
  let Result = await DetailsByIDService(req, DataModel);
  res.status(200).json(Result);
};

// exports.DeleteProduct = async (req, res) => {
//   let DeleteID = req.params.id;
//   const ObjectId = mongoose.Types.ObjectId;

//   let CheckReturnAssociate = await CheckAssociateService(
//     { ProductID: ObjectId(DeleteID) },
//     ReturnProductsModel
//   );
//   let CheckPurchaseAssociate = await CheckAssociateService(
//     { ProductID: ObjectId(DeleteID) },
//     PurchaseProductsModel
//   );
//   let CheckSaleAssociate = await CheckAssociateService(
//     { ProductID: ObjectId(DeleteID) },
//     SaleProductsModel
//   );

//   if (CheckReturnAssociate) {
//     res
//       .status(200)
//       .json({ status: "associate", data: "Associate with Return" });
//   } else if (CheckPurchaseAssociate) {
//     res
//       .status(200)
//       .json({ status: "associate", data: "Associate with Purchase" });
//   } else if (CheckSaleAssociate) {
//     res.status(200).json({ status: "associate", data: "Associate with Sale" });
//   } else {
//     let Result = await DeleteService(req, DataModel);
//     res.status(200).json(Result);
//   }
// };

exports.ProductsDropDown = async (req, res) => {
  let Result = await DropdownService(req, DataModel, { _id: 1, name: 1 });
  res.status(200).json(Result);
};
