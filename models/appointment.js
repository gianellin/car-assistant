const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    
    code: { type: Number, min: 1, max: 100},
    date: { type: Date, },
    vehicleYear: {type: String, 
                match:/[1-2][0-9][0-9][0-9]\d?/},
    vehicleMake: {
        type: String,
        enum: ['Audi', 'Alfa Romeo', 'Ferrari', 'BMW', 
        'Cadillac', 'LAND ROVER', 'Mercedes Benz' ]
    },

     model: { 
        type: String,
        enum: [ "Model 1", "Model 2", "Model 3", "Model 4"]
    },
       
});

module.exports = mongoose.model("Appointment", appointmentSchema);


