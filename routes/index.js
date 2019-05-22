const express = require('express')
const router = express.Router()

const filmmakerController = require('../controllers/filmmakerController')
const investorController = require('../controllers/investorController')

// filmmaker controller routes
router.get('/', filmmakerController.index)
router.post('/', filmmakerController.create)
router.get('/:id', filmmakerController.show)
router.put('/:id', filmmakerController.update)
router.delete('/:id', filmmakerController.delete)

// investor controller routes
router.get('/investor/',investorController.index)
router.post('/investor/',investorController.create)
router.get('/investor/:investorId',investorController.show)
router.put('/investor/:investorId',investorController.update)
router.delete('/investor/:investorId',investorController.delete)



module.exports = router