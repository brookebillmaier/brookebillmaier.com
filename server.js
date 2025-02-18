// const express = require('express');
// const app = express();
// const session = require('express-session')
// const router = express.Router()
//
//
// const PORT = process.env.PORT || 3001;
//
// // Middleware
// app.use(express.json())
// app.use(express.static('public'))
//
// //Extended: false - does not allow nested objects in query strings
// app.use(express.urlencoded({extended: false}));
//
// // Routes
// app.get('/', function(req, res){
//   res.render('index.html');
// });
//
// app.listen(PORT, () => {
//   console.log('listening on port:', PORT)
// })
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to serve static files
app.use(express.static(path.join(__dirname))); // Serves `index.html` and static files

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve partial HTML views dynamically
app.get('/partials/:view', (req, res) => {
    res.sendFile(path.join(__dirname, 'partials', `${req.params.view}.html`));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
