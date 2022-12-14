const Service = require('../models/service');
const Appointment = require('../models/appointment');

//CONTROLLERS for new resource with ref to flights

//View a form for a new service
const newService =(req, res) => {
    
    res.render('services/new', { title: 'New Service', appointmentDoc: req.params.id}); 
}

// Create a new service in the show page
const createService = (req, res) => {
    req.body.appointment = req.params.id;
    console.log(req.body, "<---- this is the content of service FORM")
    Appointment.findById(req.params.id, function(err, appointmentDoc){
       Service.create(req.body, function(err, serviceDoc){
            if(err) {
                console.log(err, "There is an err in the Create from SERVICE resource handle")
                } else{
                    res.redirect(`/appointments/${req.params.id}`, appointmentDoc, serviceDoc); //to url
                }
            });
    })
}


const editService =(req, res) => {
    Service.findById( req.params.id, function(err, serviceDoc){
        console.log(serviceDoc, "<-- this is the appointmentDOC");
            res.render('services/edit' , {title: 'Edit Service', serviceDoc});
        })
   
}



// the ACTION attribute in the FORM is used to indicate where its data is sent to when it is submitted 

const updateService = (req, res) => {

    Service.findByIdAndUpdate(req.params.id, req.body, {new: true},
        function(err, serviceDoc) {
            if (err || !serviceDoc) return res.redirect('/appointments');
      res.redirect(`/appointments/${serviceDoc.appointment}`);
    }
  );
}
 
module.exports = {

    new: newService,
    create: createService,
    edit: editService,
    update: updateService
    
};