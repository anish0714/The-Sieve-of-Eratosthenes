const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

// logging each and every request
app.use(morgan("dev"));

// for fixing cross origin issue
app.use(cors());
app.use(bodyParser.json());

// Init Middleware
app.use(express.json({ extended: false }));

// initial route
app.get("/", (req, res) => res.json({ msg: "Welcome to TEST API" }));

// Routes
require("./app/routeHandler")(app);

// port having prod environment or local
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
