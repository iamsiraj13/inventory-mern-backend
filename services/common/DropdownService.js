const DropdownService = async (Request, DataModel, Projection) => {
  try {
    let email = Request.headers["email"];
    let data = await DataModel.aggregate([
      { $match: { email: email } },
      { $project: Projection },
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = DropdownService;
