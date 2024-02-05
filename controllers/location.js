const router = require('express').Router();
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../models');

// API GET ALL LOCATIONS
router.get('/', async (req, res) => {
    const dbLocationData = await Location.findAll({
        include: { 
            model: Vehicle,
            attributes: ['brand', 'model', 'year']
        }
    })

    dbLocationData===null 
        ? res.status(400).json({ message: 'Invalid location id' })
        : res.status(200).json(dbLocationData)
});

// API GET SINGLE LOCATION
router.get('/:id', async (req, res) => {
    const dbLocationData = await Location.findOne({
        where: { id: req.params.id },
        include: { 
            model: Vehicle,
            attributes: ['brand', 'model', 'year']
        }
    })

    dbLocationData===null 
        ? res.status(400).json({ message: 'Invalid location id' })
        : res.status(200).json(dbLocationData)
});


module.exports = router;