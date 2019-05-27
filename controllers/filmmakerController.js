const Filmmaker = require('../models/Filmmaker.js')

const filmmakerController = {
    //     index: function (req, res) {
    //         Filmmaker.find().then(filmmakers => {
    //             res.send({ filmmakers })
    //         })
    //     },


    //     new: function (req, res) {
    //         res.send()
    //     },

    //     show: function (req, res) {
    //         Filmmaker.findById(req.params.id).then(filmmaker => {
    //             res.send({ filmmaker })
    //         })
    //     },

    //     create: function (req, res) {
    //         newfilmmaker = (req.body)
    //         Filmmaker.create(newfilmmaker)
    //             .then(() =>
    //                 res.render("/"))
    //     },

    //     update: function (req, res) {
    //         Filmmaker.findByIdAndUpdate(req.params.id, req.body).then(() => {
    //             res.redirect("/")
    //         })
    //     },

    //     delete: function (req, res) {
    //         Filmmaker.findByIdAndRemove(req.params.id).then(() => {
    //             res.redirect("/")
    //         })
    //     }
    // }

    index: async (req, res) => {
        try {
            const filmmakers = await Filmmaker.find({})
            res.json(filmmakers)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const filmmakerId = req.params.id
            const filmmaker = await Filmmaker.findById(filmmakerId)
            res.json(filmmaker)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
            const newFilmmaker = req.body
            const savedFilmmaker = await Filmmaker.create(newFilmmaker)
            res.json(savedFilmmaker)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
            const filmmakerId = req.params.id
            const updatedFilmmaker = req.body
            const savedFilmmaker = await Filmmaker.findByIdAndUpdate(filmmakerId, updatedFilmmaker, { new: true })
            res.json(savedFilmmaker)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
            const filmmakerId = req.params.id
            const deletedFilmmaker = await Filmmaker.findByIdAndRemove(filmmakerId)
            res.json(deletedFilmmaker)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = filmmakerController












