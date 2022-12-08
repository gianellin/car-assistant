const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    
    code: { type: Number, min: 1, max: 100},
    date: { type: Date, },
    vehicleYear: {type: Number, min: 1990 , max:2023},
    vehicleMake: {
        type: String,
        enum: ['Audi', 'Alfa Romeo', 'Ferrari', 'BMW' , 
        'Cadillac', 'LAND ROVER', 'Mercedes Benz' ]
    },

    vehicleModel: { 
        type: String,
        "if" : { 
            vehicleMake: {'Audi': {enum: [ 'A3', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tronGT']},
        "else if" : {
            vehicleMake: {'Alfa Romeo': {enum: [ 'Giulia', 'Stelvio', 'Giulia Q', 'Stelvio Q', 'Tonale']},
            "else if" : {
                vehicleMake: {'Ferrari': {enum: [ 'Purosangue', '812 GTS', '296 GTB', '296 GTS', 'SF90 STRADALE', 'SF90 SPIDER', 'F8 TRIBUTO', 'F8 Spider']},
                "else if" : {
                    vehicleMake: {'BMW': {enum: [ 'X1', 'X3', 'X4', 'X5', 'X6', 'X7', 'iX', 'Sedan', 'M3', 'M5', 'M8', '2S Coupe']},
                    "else if" : {
                        vehicleMake: {'Cadillac': {enum: [ 'Escalade', 'XT4', 'XT5', 'XT6', 'LYRIQ', 'CELESTIQ', 'CT5', 'CT4' ]},
                        "else if" : {
                            vehicleMake: {'Land Rover': {enum: [ 'Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Discovery', 'Discovery Sport', 'Defender' ]},
                            "else if" : {
                                vehicleMake: {'Mercedes Benz': {enum: [ 'GLA', 'GLB', 'GLC', 'GLE', 'EQB', 'G-Class Suv', 'GLS SUV', 'EQS SUV', 'Maybach', 'A-Class Sedan', 'C-Class Sedan', 'E-Class Sedan', 'CLA Coupe', 'CLS Coupe', 'SL Roadster' ]},
                    }}},
                }}},
            }}},
        }}},
    }}},
});

module.exports = mongoose.model("Appointment", appointmentSchema);
