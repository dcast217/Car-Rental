const router = require('express').Router();
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../../models');

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

// API GET ALL VEHICLES
    router.get('/vehicle/', async (req, res) => {
        const dbVehicleData = await Vehicle.findAll({})

        dbVehicleData===null 
            ? res.status(400).json({ message: 'Invalid vehicle id' })
            : res.status(200).json(dbVehicleData)
    });


// API GET ALL LOCATIONS
    router.get('/location/', async (req, res) => {
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

// RESERVATION: Get Reservation by ID
    router.get('/reservation/:id', async (req, res) => {
        const dbData = await Reservation.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'check_out', 'check_in'],
            include: [{
                model: User,
                attributes: ['name']
            },
            {
                model: Vehicle,
                attributes: ['brand', 'model', 'year']
            },
            {
                model: Location,
                attributes: ['name', 'address']
            }]
        })

        dbData===null 
            ? res.status(400).json({ message: 'Invalid reservation id' })
            : res.status(200).json(dbData)
    })

// RESERVATION: Get Reservation(s)
    router.get('/reservation', async (req, res) => {
        const dbData = await Reservation.findAll({
            attributes: ['id', 'check_out', 'check_in'],
            include: [{
                model: User,
                attributes: ['name'],
            },
            {
                model: Vehicle, 
                attributes: ['brand', 'model', 'year']
            },
            {
                model: Location,
                attributes: ['name', 'address']
            }]
        })

        dbData===null 
        ? res.status(400).json({ message: 'Invalid reservation id' })
        : res.status(200).json(dbData)
    })

// RESERVATION: Update Reservation
    router.put('/reservation/:id', async (req, res) => {
        
    })

// RESERVATION: Delete Reservation
    router.delete('/reservation/:id', async (req, res) => {
        const dbReservation = await Reservation.destroy({
            where: { id: req.params.id }
        })
    //Returns 200 status if record deleted, 400 status if no record deleted
    //Records = value of records deleted | 1 deleted or 0 deleted
        dbReservation > 0
            ? res.status(200).json({ records: dbReservation })
            : res.status(400).json({ records: dbReservation })
    })

// RESERVATION : Create Reservation
router.post('/reservation', async (req, res) => {
    const dbData = await Reservation.create(req.body)    

    res.status(200).json(dbData)
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