const DetailsService = async (Request, DataModel) => {
  try {
    let id = Request.params.id;
    let email = Request.headers["email"];

    let data = await DataModel.aggregate([
      { $match: { _id: id, email: email } },
      { $project: { _id: 1, name: 1 } },
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = DetailsService;
