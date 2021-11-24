const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;
const app = express();
const reader = require("./reader");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/download", (req, res) => {
  console.log(req.body.title);
  reader.createPDF(req.body.title);
  res.sendStatus(200);
});
app.get("/req", (req, res) => {
  console.log("downloading");
  // res.download("./file.pdf");
  res.redirect("/bingo");
});

app.listen(port, function () {
  console.log(`server listening on port: ${port}`);
});
