  
const router = require('express').Router()
const burger = require('../models/burgers.js')

router.get('/', (req, res) => {
  burger.getAll(burgers => {
    res.render('index', { burgers })
  })
})

module.exports = router