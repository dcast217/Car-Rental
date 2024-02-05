const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../models');
//API request go to API file

router.get('/profile', async (req, res) => {
    res.render('dashboard', {layout: 'main'});
});

router.get('/', async (req, res) => {
    res.render('home', {layout: 'hero'});
});


// Route to render the login form
router.get('/login', (req, res) => {
  res.render('form', {form: 'login', layout: 'main'});
});



router.get('/vehicles', async (req, res) => {
  const dbVehicleData = await Vehicle.findAll()
  const vehicleData = dbVehicleData.map((data) => data.get({plain: true}))
  console.log(vehicleData)
  vehicleData===null
      ? res.render('home', {message: 'Invalid vehicle id', layout: 'error' })
      : res.render('home', {vehicleData})
});

// Handle form submission
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  
  // Perform authentication logic here
  
  // Redirect to a different page after successful login
  res.render('form', {form: 'signup', layout: 'main'});
});

// Catch all for routing
router.get('*', (req, res) => {
    res.status(404).json({message: 'Invalid route'})
});
module.exports = router;