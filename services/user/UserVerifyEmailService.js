const OTPModel = require("../../models/Users/OTPSModel");
const SendEmail = require("../../utils/SendEmail");

exports.UserVerifyEmailService = async (Request, DataModel) => {
  try {
    let email = Request.params.email;

    let userCount = await DataModel.aggregate([
      { $match: { email: email } },
      { $count: "total" },
    ]);

    if (userCount.length > 0) {
      let optCode = Math.floor(100000 + Math.random() * 900000);

      await OTPModel.create({ email: email, otp: optCode });

      let sendemail = await SendEmail(
        email,
        "You pin is:  " + optCode,
        "  Your Inventory Varification Code"
      );

      return { status: "success", data: sendemail };
    } else {
      return { status: "success", data: "User Not Foud" };
    }
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};
