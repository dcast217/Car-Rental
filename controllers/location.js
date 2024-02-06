const router = require('express').Router();
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../models');


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
        : res.render('location', {locationData, layout: 'main'})

});

module.exports = router;