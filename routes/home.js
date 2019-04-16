const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'My Express App', message: 'Hello', text: 'This is an amazing app!' })
})

module.exports = router;


