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

async function resetAllBookingController(req,res){
    try {

        await seatService.restAllBooking();
        return res.status(200).send({message:"reset all the booking successfully"})
        
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error from reset all seats controller' });

    }
}

module.exports={
    getAllSeats,bookSeats,resetAllBookingController
}