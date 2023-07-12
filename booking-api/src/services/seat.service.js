const Seat = require("../models/seats.model");

async function getAllSeats(){
    
    try {
       const seats=await Seat.find(); 
       return seats;
    } catch (error) {
        throw new Error('Failed to find seats');
    }
}

async function bookSeats(seats){
    try {

        if(seats<0){
            throw new Error('minimum 1 seat required');
        }
        else if(seats>7){
            throw new Error("one user can book max 7 seats at time")
        }

        const availableSeats=await Seat.find({isBooked:false});

       

        let availableInOneRow=[availableSeats[0]];

        for(let i=1;  i<availableSeats.length && availableInOneRow.length<seats; i++){

            if(availableInOneRow.length==seats){
                break;
            }
            
            if(availableSeats[i-1].row===availableSeats[i].row){
                availableInOneRow.push(availableSeats[i])
            }
            else{
                availableInOneRow=[]
            }

        }
       

        if(availableInOneRow.length===seats){
            // const bookedSeats=[]
            for(let i=0; i<availableInOneRow.length; i++){
                console.log("available seats ",i)
                availableInOneRow[i].isBooked=true;
                await availableInOneRow[i].save()
                console.log("available seats ",availableInOneRow[i])
                
            }
            return availableInOneRow;
        }
        else{
            const nearestSeats=[];
            
            const minDistance=Infinity
            const distance=0
            const startIndex=0;
            const endIndex=seats;
            for(let i=0; i<seats; i++){
                temp.push(availableSeats[i])
                nearestSeats.push(availableSeats[i])
                distance+=availableSeats[i].seatNumber;
            }

            for(let i=0; i<availableSeats.length; i++){
                
                distance=distance-availableSeats[i]+availableSeats[seats+i];
                if(distance<minDistance){
                    minDistance=distance
                    startIndex=i;
                    endIndex=seats+i;
                }

            }

            for(let i=startIndex; i<=endIndex; i++){
                nearestSeats.push(availableSeats[i])
            }

            for(let i=0; i<nearestSeats.length; i++){
                nearestSeats[i].isBooked=true;
                await nearestSeats[i].save();
            }
            return nearestSeats;
        }
        
    } catch (error) {
        throw new Error('Failed to book seats');
    }
}

module.exports={getAllSeats,bookSeats}