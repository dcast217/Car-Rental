const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../models');
const locationRoute = require('./location.js');
const vehicleRoute = require('./vehicle.js');
const userRoute = require('./user.js');
const reservationRoute = require('./reservation.js');


router.get('/location', locationRoute)
router.get('/user', userRoute)
router.get('/vehicles', vehicleRoute)
router.get('/reservation', reservationRoute)

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