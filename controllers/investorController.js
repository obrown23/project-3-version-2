const Investor = require('../models/Investor.js')

const investorController = {
    index: function(req, res){
        Investor.find().then(investor => {
            res.send( {investor})
        })
    },
    
    
    new: function(req, res){
        res.send("/investors/")
    },
    
    show: function(req,res){
        investorModel.findById(req.params.investorId).then(investor => {
            res.send("/investor/:investorId")
        })
    },
    
    create: function(req,res) {
        newinvestor = (req.body)
        investorModel.create(newinvestor).then(() => res.redirect("/investor/"))
    },
    
    update: function(req,res){
        investorModel.findByIdAndUpdate(req.params.investorId, req.body).then(() => {
            res.redirect("/investor/:investorId")
        })
    },
    
    delete: function(req,res){
        investorModel.findByIdAndRemove(req.params.investorId).then(() => {
            res.redirect("/investor/:investorId")
            })
        }
    }
    
    module.exports = investorController
    


