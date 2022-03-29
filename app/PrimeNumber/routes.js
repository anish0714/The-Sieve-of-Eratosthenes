const router = require("express").Router();
const primeNumberController = require("./controller");

router.get("/getMedian/:n", primeNumberController.getMedian);
module.exports = router;
