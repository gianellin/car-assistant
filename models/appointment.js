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
        'Cadillac', 'Land Rover', 'Mercedes Benz' ],
        default: '',
    },

    model: { 
        type: String,
        enum: [ 'A3', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tronGT',
            'Giulia', 'Stelvio', 'Giulia Q', 'Stelvio Q', 'Tonale',
            'Purosangue', '812 GTS', '296 GTB', '296 GTS', 'SF90 STRADALE', 'SF90 SPIDER', 'F8 TRIBUTO', 'F8 Spider',
            'X1', 'X3', 'X4', 'X5', 'X6', 'X7', 'iX', 'Sedan', 'M3', 'M5', 'M8', '2S Coupe',
            'Escalade', 'XT4', 'XT5', 'XT6', 'LYRIQ', 'CELESTIQ', 'CT5', 'CT4',
            'Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Discovery', 'Discovery Sport', 'Defender',
            'GLA', 'GLB', 'GLC', 'GLE', 'EQB', 'G-Class Suv', 'GLS SUV', 'EQS SUV', 'Maybach', 'A-Class Sedan', 'C-Class Sedan', 'E-Class Sedan', 'CLA Coupe', 'CLS Coupe', 'SL Roadster'
        ],

        default: '',

    },
       
});

module.exports = mongoose.model("Appointment", appointmentSchema);


