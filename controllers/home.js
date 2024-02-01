const router = require('express').Router();
const { Locations, Users, Vehicle } = require('../../models');

// route for the homepage
router.get('/', async (req, res) => {


    res.render('home', {layout: 'main'});
});