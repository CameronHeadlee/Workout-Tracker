const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    exercises: [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets:Number,
    distance: Number
   }],
   day: {
    type: Date,
    default: Date.now
   }
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;