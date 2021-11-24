const express = require("express");

const fs = require("fs");
const port = process.env.PORT || 8080;
const app = express();


app.use(express.static('public'))

app.get('/reqpdf', (req, res) => res.download('./file.pdf'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.post('/download', (req, res) => {
  console.log(req.body)
})

app.listen(port, function () {
  console.log(`server listening on port: ${port}`);
});
