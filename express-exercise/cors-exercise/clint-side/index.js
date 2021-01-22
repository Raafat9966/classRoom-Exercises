const express = require("express");
const cors = require("cors");

let app = express();

app.use(cors());

app.use("/", express.static("static"));

app.listen(5000, () => console.log(`Server running on http://localhost:5000`));
