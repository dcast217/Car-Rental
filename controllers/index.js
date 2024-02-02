const router = require('express').Router();
const apiRoutes = require('./api/index.js')

//API request go to API file
router.use('/api', apiRoutes)

router.get('/profile', async (req, res) => {
    res.render('dashboard', {layout: 'main'});
});

router.get('/', async (req, res) => {
    res.render('home', {layout: 'hero'});
});

// Catch all for routing
router.get('*', (req, res) => {
    res.status(404).json({message: 'Invalid route'})
});

module.exports = router;