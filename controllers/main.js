const Main = require('../models/main.js')
const router = express.Router()
const express = require('express')

router.get('/', (req, res)=> {
  res.render('index.html')
})
