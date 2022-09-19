exports.UserVerifyOtpService = async (Request, DataModel) => {
  try {
    let email = Request.params.email;
    let otpCode = Request.params.otpCode;
    let status = 0;
    let updatedStatus = 1;

    let otpCount = await DataModel.aggregate([
      { $match: { email: email, otp: otpCode, status: status } },
      { $count: "total" },
    ]);

    if (otpCount.length > 0) {
      let result = await DataModel.updateOne(
        { email: email, otp: otpCode, status: status },
        { email: email, otp: otpCode, status: updatedStatus }
      );
      return { status: "success", data: result };
    } else {
      return { status: "Invalid OTP code" };
    }
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};
