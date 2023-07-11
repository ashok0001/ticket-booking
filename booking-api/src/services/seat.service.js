const Seat = require("../models/seats.model");

async function getAllSeats(){
    
    try {
       const seats=await Seat.find(); 
       return seats;
    } catch (error) {
        throw new Error('Failed to find seats');
    }
}

module.exports={getAllSeats}