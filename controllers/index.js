const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../models');
const locationRoute = require('./location.js');
const vehicleRoute = require('./vehicle.js');
const userRoute = require('./user.js');
const reservationRoute = require('./reservation.js');


router.use('/location', locationRoute)
router.use('/user', userRoute)
router.use('/vehicle', vehicleRoute)
router.use('/reservation', reservationRoute)

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


// API GET ALL LOCATIONS
router.get('/locations', async (req, res) => {
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


// PROFILE(DASHBOARD) ROUTE
    router.get('/profile', async (req, res) => {
        const dbUserData = await User.findByPk(1, {
            include: {
                model: Location,
                attributes: ['name']
            },
            attributes: {
                exclude: ['password']
            }
        })
        const userData = dbUserData.get({plain: true});

        //set authenticated to saved session variable for true/false - Navigation partial shows 'Account' or 'Login'
        res.render('dashboard', { userData, authenticated: true, layout: 'main'});
    });
// END PROFILE(DASHBOARD) ROUTE

// HOMEPAGE ROUTE
    router.get('/', async (req, res) => {
        const dbLocData = await Location.findAll()
        const locData = dbLocData.map((data) => data.get({ plain: true }));
        console.log(locData);
        res.render('home', { locData , authenticated: false, layout: 'hero'});
    });
// END HOMEPAGE ROUTE

// LOGIN ROUTE
router.get('/login', async (req, res) => {

    res.render('form', { form: 'login', layout: 'main'});
});
// END LOGIN ROUTE

// SIGNUP ROUTE
router.get('/signup', async (req, res) => {

    res.render('form', {form: 'signup', layout: 'main'});
});
// END SIGNUP ROUTE


// CATCH ALL FOR ROUTING
    router.get('*', (req, res) => {
        res.render('home', { layout: 'error' })
    });
// END CATCH ALL

module.exports = router;