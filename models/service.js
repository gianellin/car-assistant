const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const serviceSchema = new Schema({
    name: {
        type: String,
        enum: ['Oil & Filter Change',  'Tire Rotation',  'State Inspection',  'Wheel Alignment', 
        'Tire Replacement',  'Flat Repair',  'Roadside Assistance', 'Brake',
         'Brake Fluid Exchange', 'Other'],
       
    },
    code: {
        type: String,
        enum: [ "S0001", "S0002-Subscription"],
       
    },
    time: {
        type: String,
        enum: ["Fast", "Normal"],
      
    },
    price: {
        type: String,
        enum: ["$250-Subscription", "Service-provider", "$400-Subscription"],
       
    },
    appointment: {
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
    }
});


module.exports = mongoose.model("Service", serviceSchema);