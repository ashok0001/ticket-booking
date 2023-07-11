const mongoose = require('mongoose');

// Create a User schema
const seatSchema = new mongoose.Schema({
  isBooked:{
    type:Boolean,
    default:false
  },
  row:{
    type:Number,
    required:true
  },
  coach:{
    type: mongoose.Schema.Types.ObjectId,
        ref: 'coach',
        required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Seat = mongoose.model('seats', seatSchema);

module.exports = Seat;