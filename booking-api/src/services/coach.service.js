const Coach = require('../models/coach.model.js');
const Seat = require('../models/seats.model.js');

// Service method for creating a new coach
async function createCoach(numberOfSeats) {
  try {
    // const numberOfSeats = 80; // Set default number of seats
    const numberOfRows=Math.ceil(numberOfSeats/7)
    const newCoach = new Coach({ numberOfSeats, numberOfRows });
    const savedCoach = await newCoach.save();

    // Generate 80 seats for the coach
    const seatIds = [];
    
      for (let seatNumber = 1; seatNumber <= numberOfSeats; seatNumber++) {
        const newSeat = new Seat({ row:Math.ceil(seatNumber/7), coach: savedCoach._id,seatNumber });
        const savedSeat = await newSeat.save();
        seatIds.push(newSeat);
      }
    

    // Update the coach with the seatIds
    savedCoach.seats = seatIds;
    await savedCoach.save();

    // console.log(savedCoach)

    return savedCoach;
  } catch (error) {
    throw new Error('Failed to create coach');
  }
}

module.exports = {
  createCoach,
};
