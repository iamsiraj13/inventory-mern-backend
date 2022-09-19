// const jwt = require("jsonwebtoken");
// exports.AuthVerify = async (req, res, next) => {
//   let Token = res.headers["token"];

//   jwt.verify(Token, "iamsiraj13", (error, decode) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(decode);
//       next();
//     }
//   });
// };

var jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  let Token = req.headers["token"];
  jwt.verify(Token, "iamsiraj13", function (err, decoded) {
    if (err) {
      res.status(401).json({ status: "unauthorized" });
    } else {
      let email = decoded["data"];
      req.headers.email = email;
      next();
    }
  });
};
