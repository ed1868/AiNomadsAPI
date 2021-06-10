const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
// isLoggedIn

router.get('/secret', (req, res, next) => {
  res.json({
    secret: `GOD MODE ACTIVATED`,
    user: `AI NOMAD`,
  })
})

module.exports = router
