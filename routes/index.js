const express = require('express')
const router = express.Router()

const filmmakerController = require('../controllers/filmmakerController')
const investorController = require('../controllers/investorController')

router.get('/', filmmakerController.index)
router.post('/', filmmakerController.create)
router.get('/:id', filmmakerController.show)
router.put('/:id', filmmakerController.update)
router.delete('/:id', filmmakerController.delete)

router.get('/',investorController.index)
router.post('/',investorController.create)
router.get('/:id',investorController.show)
router.put('/:id',investorController.update)
router.delete('/:id',investorController.delete)



module.exports = router