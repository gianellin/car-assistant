
const Appointment = require("../models/appointment")
const Service = require("../models/service")



//View a form for an appointment
const newAppointment = (req, res)=>{
    res.render("appointments/new", {title: 'New Appointment'});
}

//Handles the new appointment form being submitted
const create =(req, res) => {
    console.log(req.body, '<-- Contents for Appoinment FORM')
    Appointment.create(req.body, function(err, appointmentDoc){
            if (err) {
            console.log("Check the terminal Creating has an err ")
            } else{
               console.log(appointmentDoc);
                //respond to the client - url
                res.redirect(`/appointments`);
            }
        });  
}

 // Handles the list of appointments made for the user
const index = (req, res) => {
    Appointment.find({}, function(err, appointmentDocs) {
        console.log(appointmentDocs)
        if (err) {
            console.log(err, "Check terminal INDEX has an err")
        } else {
            res.render('appointments/index', {title: 'Appointments', appointments: appointmentDocs})   
        }
        
    });
}

//Handles the details for any specific appointment
const show =(req, res) => {
    Appointment.findById(req.params.id, function(err, appointmentDoc){
        Service.find({appointment: appointmentDoc._id}, function(err, servicesDoc) {
            console.log(servicesDoc, '<---- service information')
            console.log(appointmentDoc)
             if (err) {
                console.log('there is an err in the show controller')
                } else { 

                    //IN THE RENDER
                    // 1. res.render (ejs route) 
                    // 2. after ',', I am changing the title of the page dynamically
                    // 3. I am showing out the appointment
                    // 4. and LAST modification is allowing to render the services list in this appointment show page. 
                    // the serviceDocs was added once the resource SERVICE was created.
                    res.render('appointments/show', {title: 'Appointment details', appointmentDoc, servicesDoc})    
                }
            })
    });

}

//https://stackoverflow.com/questions/66273866/delete-a-document-via-mongoose-and-express-by-clicking-a-button
//Deletes an appointment from the Index list
const deleteAppointment = (req, res) => {
    Appointment.findByIdAndDelete(req.params.id, function(err, appointmentDoc) {
        if(err) {
            console.log(err, " Check the terminal");
        } else {
            res.redirect('/appointments')
        }
    })
}


module.exports = {
    create,
    new: newAppointment,
    index,
    show,
    delete: deleteAppointment
} 

