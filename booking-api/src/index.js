const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());

app.use(
  cors()
);


app.get("/", async (req,res) => {
    
  return res.status(200).send("welcome to ticket booking system")
})

// seat
const seatRoute=require("./routes/seat.routes.js")

app.use("/api",seatRoute);


// coach
const coachRoute=require("./routes/coach.routes.js");

app.use("/api",coachRoute)


module.exports = app;