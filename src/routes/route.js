const express = require('express')
const router = express.Router();
const cityController = require('../controller/cityController')
const userController = require('../controller/userController')


router.post('/createCity', cityController.createCity)
router.get('/getCities', cityController.getCities)

router.post('/createUser', userController.createUser)
router.get('/getUser', userController.getUser)
router.patch('/UpdateUser/:Id', userController.UpdateUser)

module.exports = router;