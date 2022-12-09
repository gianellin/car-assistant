var express = require('express');
var router = express.Router();
const appointmentCtrl = require('../controllers/appointments');
const isLoggedIn = require('../config/auth')



/* GET users listing. */
router.get('/new', isLoggedIn, appointmentCtrl.new);
router.get('/', isLoggedIn, appointmentCtrl.index);
router.get('/:id', isLoggedIn, appointmentCtrl.show);
router.post('/', isLoggedIn, appointmentCtrl.create);

module.exports = router;