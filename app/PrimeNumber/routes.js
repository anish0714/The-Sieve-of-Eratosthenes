const router = require("express").Router();
const primeNumberController = require("./controller");

// @type GET
// @desc Get Median by id :n
router.get("/getMedian/:n", primeNumberController.getMedian);
module.exports = router;
