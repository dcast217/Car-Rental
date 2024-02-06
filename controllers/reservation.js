const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../models');
const withAuth = require('../utils/auth');


router.get('/create', withAuth, async (req, res) => {
    const dbData = await Vehicle.findAll({
        include: {
            model: Location
        }
    })

    const vehicleData = dbData.map((data) => data.get({ plain: true }));

    res.render('reserve', {vehicleData, layout: 'main'})
})

// RESERVATION: Get Reservation(s) by User ID
router.get('/:id', async (req, res) => {
    const dbReservationData = await Reservation.findAll({
        where: { user_id: req.params.id },
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

    const reservationData = dbReservationData.map((data) => data.get({ plain: true }));
    console.log(reservationData)
    reservationData===null 
        ? res.render('home', {authenticated: req.session.authenticated, message: 'No reservations found.', layout: 'error' })
        : res.render('reservation', {reservationData, authenticated: req.session.authenticated, layout: 'main'})
})


// RESERVATION: Update Reservation
router.put('/:id', async (req, res) => {
    
})

// RESERVATION: Delete Reservation
router.get('/delete/:id', async (req, res) => {
    const dbReservation = await Reservation.destroy({
        where: { id: req.params.id }
    })
//Returns 200 status if record deleted, 400 status if no record deleted
//Records = value of records deleted | 1 deleted or 0 deleted
    dbReservation > 0
        ? res.redirect('/reservations')
        : res.render('home', {authenticated: req.session.authenticated, message: 'No reservation found.', layout: 'error' })
})

// RESERVATION : Create Reservation
router.post('/', async (req, res) => {
console.log("INFO", req.body);

const dbData = await Reservation.create(req.body)    

    res.redirect('/reservations')
})

module.exports = router;