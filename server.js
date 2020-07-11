const express = require('express');
const app = express();
const session = require('express-session')
const router = express.Router()


const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json())
app.use(express.static('public'))

//Extended: false - does not allow nested objects in query strings
app.use(express.urlencoded({extended: false}));

// Routes
app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(PORT, () => {
  console.log('listening on port:', PORT)
})
