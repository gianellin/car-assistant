
const Appointment = require("../models/appointment")


//View a form for an appointment
let newAppointment = (req, res)=>{
    res.render("appointments/new", {title: 'New Appointment'});
}

//Handles the new appointment form being submitted
let create =(req, res) => {
    console.log(req.body, 'Contents of the form')
    Appointment.create(req.body, function(err, appointmentDoc){
        if(err) {
            console.log(err);
            res.send('err creating check the terminal')
        }
    
        console.log(appointmentDoc);
        res.redirect(`/appointments/${appointmentDoc._id}`);
        });
}
 // Handles the list of appointments made for the user
let index = (req, res) => {
    Appointment.find({}, function(err, appointmentDocs) {
        console.log(appointmentDocs)

        res.render('appointments/index', {title: 'Appointments', appointments: appointmentDocs})
    })
}

//Handles the details for any specific appointment
let show =(req, res) => {
    console.log(req.params.id);
    Appointment.findById(req.params.id, function(err, appointmentDoc){
        res.render('appointments/show', {title: 'Appointment Detail', appointmentDoc});
    })

}





module.exports = {
    create,
    new: newAppointment,
    index,
    show
} 