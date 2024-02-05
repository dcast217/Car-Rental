const router = require('express').Router();
const sequelize = require('../config/connection.js');
const apiRoutes = require('./api/index.js')
const { User, Location, Vehicle } = require('../models');

//API request go to API file
router.use('/api', apiRoutes)

// PROFILE(DASHBOARD) ROUTE
/*
    This would be shown after login and when clicking on anything
    that would go to your "account" page.
*/
    router.get('/profile', async (req, res) => {
        const dbUserData = await User.findByPk(4, {
            include: {
                model: Location,
                attributes: ['name']
            },
            attributes: {
                exclude: ['password']
            }
        })
        const userData = dbUserData.get({plain: true});
        console.log(userData);

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