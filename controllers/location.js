const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../models');
const locationRoute = require('./location.js');
const vehicleRoute = require('./vehicle.js');
const userRoute = require('./user.js');
const reservationRoute = require('./reservation.js');
const withAuth = require('../utils/auth');



// API GET SINGLE LOCATION
router.get('/:id', async (req, res) => {
    const dbLocationData = await Location.findOne({
        where: { id: req.params.id },
        include: { 
            model: Vehicle,
            attributes: ['id', 'brand', 'model', 'year']
        }
    })

    const locationData = dbLocationData.get({plain: true});

    console.log(locationData)

    locationData===null 
        ? res.render('home', {message: 'No reservations found.', layout: 'error' })
        : res.render('location', {locationData, authenticated: req.session.authenticated, layout: 'main'})

});

module.exports = router;