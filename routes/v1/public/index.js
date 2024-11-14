const express = require("express");
const fittingsizes = require("./fittingSize.route")

const router = express.Router();

router.use("/fittingsizes", fittingsizes);


module.exports = router;