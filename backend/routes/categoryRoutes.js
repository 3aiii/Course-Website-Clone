const { getAllCat, getSingleCat,pagination } = require('../controllers/categoryController')

const router = require('express').Router()

router.get('/getAllCat',getAllCat) 
router.get('/getSingleCat/:id',getSingleCat)
// router.get('/pagination/:id',pagination)

module.exports = router