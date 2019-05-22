const Filmmaker = require('../models/Filmmaker.js')

const filmmakerController = {
    index: function(req, res){
        Filmmaker.find().then(filmmakers => {
            res.send( {filmmakers})
        })
    },

    
    new: function(req, res){
        res.send()
    },
    
    show: function(req,res){
        Filmmaker.findById(req.params.id).then(filmmaker => {
            res.send({filmmaker})
        })
    },
   
    create: function(req,res) {
        newfilmmaker = (req.body)
        Filmmaker.create(newfilmmaker).then(() => res.redirect("/"))
    },
    
    update: function(req,res){
        Filmmaker.findByIdAndUpdate(req.params.id, req.body).then(() => {
            res.redirect("/")
        })
    },
    
    delete: function(req,res){
        Filmmaker.findByIdAndRemove(req.params.id).then(() => {
            res.redirect("/")
            })
        }
    }

module.exports = filmmakerController




// const filmmakerModel = require('../models/filmmakers.js')





    

