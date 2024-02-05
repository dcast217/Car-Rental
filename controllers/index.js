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


// Route to render the login form
router.get('/login', (req, res) => {
  res.render('form', {form: 'login', layout: 'main'});
});


// Set up your route
router.get('/vehicles', (req, res) => {
  const carData = [
    // Vehicle data goes here
  ];
  
  res.render('vehicles', { vehicles: carData });
});

// Handle form submission
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  
  // Perform authentication logic here
  
  // Redirect to a different page after successful login
  res.render('form', {form: 'signup', layout: 'main'});
});

// Catch all for routing
router.get('*', (req, res) => {
    res.status(404).json({message: 'Invalid route'})
});
module.exports = router;