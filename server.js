const express = require('express');
const app = express ();
const bodyParser = require('body-parser')
const main = express.Router;
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(bodyParser.json())


const mainController = require ('./controllers/main.js')
app.use('/', mainController)


app.listen(PORT, () => {
  console.log('listening on port:', PORT)
})
