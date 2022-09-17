const jwt = require("jsonwebtoken");

const CreateToken = async (data) => {
  const payload = {
    exp: Math.floor(Date.now / 1000) + 24 * 60 * 60,
    data: data,
  };

  return await jwt.sign(payload, "iamsiraj13");
};

module.exports = CreateToken;
