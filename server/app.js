const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("config");

const app = express();


app.get("/", (req, res) => {
    res.send("Hello World!");
}); 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
