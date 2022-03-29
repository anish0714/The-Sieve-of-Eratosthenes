// get median by id
exports.getMedian = async (req, res) => {
  try {
    const n = parseInt(req.params.n);
    // check for negative number
    if (n <= 2) {
      return res.status(200).json({
        status: false,
        msg: "please enter a valid input greater than 2",
      });
    }

    // push all numbers till n
    const numArray = [...Array(n).keys()];
    for (let i = 2; i * i < n; i++) {
      if (numArray[i] !== "1") {
        for (let j = i * i; j < n; j += i) {
          numArray[j] = "1";
        }
      }
    }

    const primeArray = [];
    // get all prime nos wrt numArray
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] > 1) {
        primeArray.push(numArray[i]);
      }
    }

    // for even, return 2 medians
    if (primeArray.length % 2 == 0) {
      return res.status(200).json({
        status: true,
        prime: primeArray,
        median: [
          primeArray[primeArray.length / 2 - 1],
          primeArray[primeArray.length / 2],
        ],
      });
    }

    // for odd, return 1 median
    return res.status(200).json({
      status: true,
      prime: primeArray,
      median: [primeArray[Math.floor(primeArray.length / 2)]],
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: false,
      msg: "Server error",
      err: err,
    });
  }
};
