var express = require('express');
var router = express.Router();
const servicesCtrl = require('../controllers/services');
const isLoggedIn = require('../config/auth')


/* GET users listing. */
router.get('/appointments/:id/services/new', isLoggedIn, servicesCtrl.new);
router.post('/appointments/:id', isLoggedIn, servicesCtrl.create);
// router.delete('/appointments/:id', isLoggedIn, servicesCtrl.delete);
router.get('/services/:id/edit', servicesCtrl.edit);
router.put('/services/:id', servicesCtrl.update);

module.exports = router;