const express = require('express');
const router = express.Router();
const coachController=require("../controllers/coach.controller")

router.post("/coaches",coachController.createCoach)

module.exports=router;