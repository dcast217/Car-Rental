const router = require('express').Router();
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../models');

// API GET SINGLE VEHICLE
router.get('/vehicle/:id', async (req, res) => {
    const dbVehicleData = await Vehicle.findOne({
        where: { id: req.params.id },
        include: {
            model: Location,
            attributes: ['name', 'address']
        }
    })

    dbVehicleData===null 
        ? res.render('home', {message: 'Invalid vehicle id', layout: 'error' })
        : res.render('vehicle', {dbVehicleData, layout: 'main'})
});


//Show All Vehicles Route
router.get('/vehicles', async (req, res) => {
    const dbVehicleData = await Vehicle.findAll()
    const vehicleData = dbVehicleData.map((data) => data.get({plain: true}))

    console.log(vehicleData)
    vehicleData===null 
        ? res.render('home', {message: 'Invalid vehicle id', layout: 'error' })
        : res.render('vehicle', {vehicleData, layout: 'main'})
});
//END show all vehicles

module.exports = router;