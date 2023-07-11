const mongoose = require('mongoose');

// Create a User schema
const coachSchema = new mongoose.Schema({
  numberOfSeats:{
    type:Number,
    required:true
  },
  numberOfRows:{
    type:Number,
    required:true
  },
  seats:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seats',
        required: true,
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Coach = mongoose.model('coach', coachSchema);

module.exports = Coach;