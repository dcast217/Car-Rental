const router = require('express').Router();
const { NOW } = require('sequelize');
const { Location, User, Vehicle } = require('../../models');

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
            ? res.status(400).json({ message: 'Invalid vehicle id' })
            : res.status(200).json(dbVehicleData)
    });

// API GET SINGLE LOCATION
    router.get('/location/:id', async (req, res) => {
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

// USER: GET INFORMATION
    router.get('/user/:id', async (req, res) => {
        /*
            NEED TO INCLUDE VEHICLE MODEL AND CHECK IF USER_ID MATCHES ID to see if they have a "reservation"
        */
        const dbUserData = await User.findOne({
            where: { id: req.params.id },
            attributes: { exclude: ['password'] }
        })

        dbUserData===null 
            ? res.status(400).json({ message: 'Invalid user id' })
            : res.status(200).json(dbUserData)
    });

// USER: DELETE USER
    router.delete('/user/:id', async (req, res) => {
        const dbUserData = await User.destroy({
            where: { id: req.params.id }
        })
    //Returns 200 status if record deleted, 400 status if no record deleted
    //Records = value of records deleted | 1 deleted or 0 deleted
        dbUserData > 0
            ? res.status(200).json({ records: dbUserData })
            : res.status(400).json({ records: dbUserData })
    });

// USER: UPDATE INFORMATION
    router.put('/user/:id', async (req, res) => {
        //NEED TO VALIDATE BODY INFORMATION
        const dbUserData = await User.update(req.body, {
            where: { id: req.params.id }
        })

        dbUserData > 0
        ? res.status(200).json( {records: dbUserData, data: req.body })
        : res.status(400).json( {records: dbUserData, data: req.body })
    })


// API CATCH ALL RESPONSE
    router.get('*', async (req, res) => {
        res.status(500).json({ message: 'invalid route', request: req.params[0] })
    });

module.exports = router;


/* LEFT TO CREATE BELOW
    Reserve
    /api/vehicle
    POST
    CREATE
    Create new reservation
---
    Reserve
    /api/vehicle
    PUT
    UPDATE
    Update reservation details
---
    Reserve
    /api/vehicle
    DELETE
    DELETE
    Remove reservation
---
    User
    /api/user
    POST
    CREATE
    Create account
*/