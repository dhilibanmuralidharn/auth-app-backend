const express = require("express");
const connectDB = require("../auth-app/config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", require("../auth-app/routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
