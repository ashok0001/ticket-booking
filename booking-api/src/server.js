require('dotenv').config();

const app = require(".");
const connect = require('./config/db');
const port = process.env.PORT || 5000


app.listen(port, async () => {
  await connect()
  console.log("ticket booking application running on port", port);
});