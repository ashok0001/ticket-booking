const express = require('express');
const router = express.Router();
const seatController=require("../controllers/seat.controllers")

router.get("/seats",seatController.getAllSeats)

module.exports=router;