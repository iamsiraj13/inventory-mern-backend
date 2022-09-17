const express = require("express");
const { Registration } = require("../controllers/Users/UsersController");

const router = express.Router();

router.post("/registration", Registration);

module.exports = router;
