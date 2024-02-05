const router = require('express').Router();
const { NOW } = require('sequelize');
const { Location, User, Vehicle, Reservation } = require('../../models');

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