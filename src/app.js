const express = require("express");
const { db } = require("./conn/mongo");
const app = express();
const port = process.env.PORT

app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());
app.use(require('./routes'))

app.listen(port, () => {
  db;

  console.log('listening on port ' + port);
})

module.exports = app;