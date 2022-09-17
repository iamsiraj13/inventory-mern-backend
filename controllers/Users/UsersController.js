const UserModel = require("../../models/Users/UserModel");
const { UserCreateService } = require("../../services/user/UserCreateService");

exports.Registration = async (req, res) => {
  const result = await UserCreateService(req, UserModel);
  res.status(200).json(result);
};
