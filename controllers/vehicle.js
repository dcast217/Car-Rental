const router = require('express').Router();
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../models');


// API GET SINGLE VEHICLE
router.get('/:id', async (req, res) => {
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

module.exports = router;