const { getCollection } = require('../controllers/CollectionController')

const router = require('express').Router()

router.get('/getCollection',getCollection)

module.exports = router