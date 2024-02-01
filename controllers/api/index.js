const router = require('express').Router();
const { Locations, Users, Vehicle } = require('../../models');

// route for apis catchall
router.get('*', async (req, res) => {

    res.status(500).json({message: 'invalid route'})
});

module.exports = router;