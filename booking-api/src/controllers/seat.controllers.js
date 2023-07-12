const Seat = require("../models/seats.model.js");
const seatService=require("../services/seat.service.js");


async function getAllSeats(req,res){
    try {


        const seats=await seatService.getAllSeats();

        console.log("seats - ",seats)

        return res.status(200).send(seats)
        
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function bookSeats(req,res){
    try {

        const seats=await seatService.bookSeats(req.body.numberOfSeats);
        return res.status(200).send(seats)
        
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error from bookSeats controller' });
    }
}

module.exports={
    getAllSeats,bookSeats
}