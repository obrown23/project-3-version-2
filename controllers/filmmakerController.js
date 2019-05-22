const Filmmaker = require('../models/Filmmaker.js')

const filmmakerController = {
    index: function(req, res){
        Filmmaker.find().then(filmmaker => {
            res.send( {filmmaker})
        })
    },

    
    new: function(req, res){
        res.send("filmmakers/")
    },
    
    show: function(req,res){
        filmmakerModel.findById(req.params.filmmakerId).then(filmmaker => {
            res.send({filmmaker})
        })
    },
   
    create: function(req,res) {
        newfilmmaker = (req.body)
        filmmakerModel.create(newfilmmaker).then(() => res.redirect("/"))
    },
    
    update: function(req,res){
        filmmakerModel.findByIdAndUpdate(req.params.filmmakerId, req.body).then(() => {
            res.redirect("/")
        })
    },
    
    delete: function(req,res){
        filmmakerModel.findByIdAndRemove(req.params.filmmakerId).then(() => {
            res.redirect("/")
            })
        }
    }

module.exports = filmmakerController




// const filmmakerModel = require('../models/filmmakers.js')





    

