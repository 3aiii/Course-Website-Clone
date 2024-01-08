const { getFeedBack } = require('../controllers/feedbackController')

const router = require('express').Router()

router.get('/getFeedBack',getFeedBack)

module.exports = router
