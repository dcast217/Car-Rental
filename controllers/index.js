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
// Configure Handlebars as the view engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Route to render the login form
app.get('/login', (req, res) => {
  res.render('form', {form: 'login', layout: 'main'});
});

// Handle form submission
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  
  // Perform authentication logic here
  
  // Redirect to a different page after successful login
  res.render('form', {form: 'signup', layout: 'main'});
});

module.exports = router;
