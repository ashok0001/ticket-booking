const coachService=require("../services/coach.service.js")

async function createCoach(req,res){
    try {
        const coach=await coachService.createCoach(80)
        return res.status(200).send(coach);
    } catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
}

module.exports={
    createCoach
}
