const Appointment = require("../models/appointment")



let newAppointment = (req, res)=>{
    res.render("appointments/new");
}

module.exports = {
    new: newAppointment
}