const UpdateService = async (Request, DataModel) => {
  try {
    let email = Request.headers["email"];
    let id = Request.params.id;
    let PostBody = Request.body;
    let data = await DataModel.updateOne({ _id: id, email: email }, PostBody);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = UpdateService;
