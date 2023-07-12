const express = require('express');
const router = express.Router();
const seatController=require("../controllers/seat.controllers.js")

router.get("/seats",seatController.getAllSeats);
router.put("/seats/book",seatController.bookSeats);
router.put("/seats/reset-booking",seatController.resetAllBookingController)

module.exports=router;