const seatService=require("../services/seat.service");


async function getAllSeats(req,res){
    try {


        const seats=await seatService.getAllSeats();

        console.log("seats - ",seats)

        return res.status(200).send(seats)
        
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports={
    getAllSeats
}