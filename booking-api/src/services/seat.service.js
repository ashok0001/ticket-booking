const Seat = require("../models/seats.model.js");

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

        if(seats<1){
            throw new Error('minimum 1 seat required');
        }
        else if(seats>7){
            console.log("one userr can book max 7 seats at time")
            throw new Error("one user can book max 7 seats at time")
        }

        const availableSeats=await Seat.find({isBooked:false});

        if(availableSeats.length<seats){
            throw new Error(`only ${availableSeats.length} seats are vailable`)
        }

        let availableInOneRow=[];

        for(let i=1;  i<availableSeats.length; i++){

            if(availableInOneRow.length==seats){
                break;
            }
           
            if(availableSeats[i-1].row===availableSeats[i].row){
                availableInOneRow.push(availableSeats[i-1])
                if(availableInOneRow.length===seats-1){
                    availableInOneRow.push(availableSeats[i])
                    break;
                }
            }
            else{
                availableInOneRow=[]
            }

        }
       

        if(availableInOneRow.length===seats){
            // const bookedSeats=[]
            for(let i=0; i<availableInOneRow.length; i++){
                availableInOneRow[i].isBooked=true;
                await availableInOneRow[i].save()
                
            }
            return availableInOneRow;
        }
        else{

            // console.log("its entered .....",)


            let nearestSeats=[];
            
            var minDistance=Infinity
            var distance = Infinity
            var startIndex=0;
            var endIndex=seats;
           
           


            for(let i=0; i<=availableSeats.length-seats; i++){
                
                distance=availableSeats[seats+i-1].seatNumber-availableSeats[i].seatNumber;
                if(distance<minDistance){
                    minDistance=distance
                    startIndex=i;
                    endIndex=seats+i;
                }
                // console.log(availableSeats[i].seatNumber)

                // console.log("distance ",distance," - ",availableSeats[seats+i].seatNumber,availableSeats[i].seatNumber)

            }
            for(let i=startIndex; i<endIndex; i++){
                nearestSeats.push(availableSeats[i])
            }
            
            for(let i=0; i<nearestSeats.length; i++){
                nearestSeats[i].isBooked=true;
                await nearestSeats[i].save();
            }
            // console.log("nearest ",nearestSeats,startIndex,endIndex,minDistance)
            return nearestSeats;
        }
        
    } catch (error) {
        console.log("error", error.message)
        throw new Error(error.message);
    }
}

async function restAllBooking(){
    try {

        const seats=await Seat.find();
        for(let seat of seats){
            seat.isBooked=false;
            await seat.save()
        }

        
    } catch (error) {
        throw new Error('Failed to rest booking');
    }
}

module.exports={getAllSeats,bookSeats,restAllBooking}