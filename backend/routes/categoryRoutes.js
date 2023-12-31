const { getAllCat, getSingleCat } = require('../controllers/categoryController')

const router = require('express').Router()

router.get('/getAllCat',getAllCat) 
router.get('/getSingleCat/:id',getSingleCat)

module.exports = router