const coachService=require("../services/coach.service.js")

async function createCoach(req,res){
    try {
        const coach=await coachService.createCoach(80)
        return res.status(200).send(coach);
    } catch (error) {
        return res.status(500).send({error:"internal server error from create coach controller"})
    }
}

module.exports={
    createCoach
}
