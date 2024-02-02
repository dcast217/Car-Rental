const router = require('express').Router();
const sequelize = require('../config/connection.js');
const apiRoutes = require('./api/index.js')
const { User, Location, Vehicle } = require('../models');


//API request go to API file
router.use('/api', apiRoutes)

router.get('/profile', async (req, res) => {
    res.render('dashboard', {layout: 'main'});
});

router.get('/', async (req, res) => {
    const dbLocData = await Location.findAll()
    const locData = dbLocData.map((data) => data.get({ plain: true }));
    console.log(locData);
    res.render('home', { locData , layout: 'hero'});
});

// Catch all for routing
router.get('*', (req, res) => {
    res.status(404).json({message: 'Invalid route'})
});

module.exports = router;