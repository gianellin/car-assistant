const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const serviceSchema = new Schema({
    name: {
        type: String,
        enum: ['Oil & Filter Change',  'Tire Rotation',  'State Inspection',  'Wheel Alignment', 
        'Tire Replacement',  'Flat Repair',  'Roadside Assistance', 'Brake',
         'Brake Fluid Exchange', 'Other'],
        required: true, unique: true
    },
    code: {
        type: String,
    },
    time: {
        type: String,
    },
    price: {
        type: Number,
    },

    appointment: {
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
    }

});


module.exports = mongoose.model("Service", serviceSchema);