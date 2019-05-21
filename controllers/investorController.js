const Investor = require('../models/Investor.js')

const investorController = {
    index: async (req, res) => {
        try {
            const investors = await Investor.find({})
            res.json(investors)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const investorId = req.params.id
            const investor = await Investor.findById(investorId)
            res.json(investor)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newInvestor = req.body
          const savedInvestor = await Investor.create(newInvestor)
          res.json(savedInvestor)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
          const investorId = req.params.id
          const updatedInvestor = req.body
          const savedInvestor = await Creature.findByIdAndUpdate(investorId, updatedInvestor, {new: true})
          res.json(savedInvestor)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const investorId = req.params.id
          const deletedInvestor = await Investor.findByIdAndRemove(investorId)
          res.json(deletedInvestor)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = investorController