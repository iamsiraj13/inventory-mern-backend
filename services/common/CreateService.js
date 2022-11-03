const CreateService = async (Request, DataModel) => {
  try {
    let Postbody = Request.body;
    Postbody.email = Request.headers["email"];

    const data = await DataModel.create(Postbody);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error };
  }
};

module.exports = CreateService;
