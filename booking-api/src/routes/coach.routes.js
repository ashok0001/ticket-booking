const express = require('express');
const router = express.Router();
const coachController=require("../controllers/coach.controller.js")

router.post("/coaches",coachController.createCoach)

module.exports=router;